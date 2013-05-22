console.log("Gatekeeper Loaded"); // write to console

$(function()
{
	$("#add").click(function()
	{
		// chrome.cookies.set({"url": "http://*.com/*", "name" : "Everything"});	
	});
	
	$("#remove").click(function()
	{
		// chrome.cookies.remove({"url": "http://live.com", "name" : "ANON"});	
		chrome.tabs.executeScript(null, {file : "js/inject.js"}); // remove website's local storage
	});
	
	// fires when cookies are changed
	//chrome.cookies.onChanged.addListener(function(cookie) 
	//{
	//	console.log("Cookie Changed: " + JSON.stringify(cookie)); // write to console
	//});
	
	// fires when local storage is changed
	chrome.storage.onChanged.addListener(function(changes, namespace) 
	{
		for (key in changes) 
		{
			var storageChange = changes[key];
			console.log('Storage key "%s" in namespace "%s" changed. ' +
					'Old value was "%s", new value is "%s".',
					key,
					namespace,
					storageChange.oldValue,
					storageChange.newValue);
		}
	});
	
});