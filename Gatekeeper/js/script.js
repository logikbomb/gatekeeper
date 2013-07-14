console.log("Gatekeeper Loaded"); // write to console

$(function()
{
	
	$("#remove").click(function()
	{		
		chrome.cookies.remove({"url": "https://.twitter.com", "name" : "auth_token"});
		chrome.tabs.reload();
	});
	
	$("#set").click(function()
	{		
		chrome.cookies.set({"url": "https://twitter.com", "domain" : ".twitter.com", "name" : "auth_token", "value" : "85151835d706952db0961995ff7018a51db86489", "secure" : true});
		chrome.tabs.reload();
		//chrome.tabs.getCurrent(function(tab)
		//{
			//console.log(tab.url);

		//});
		
	});
	
	// fires when cookies are changed
	//chrome.cookies.onChanged.addListener(function(cookie) 
	//{
	//	console.log("Cookie Changed: " + JSON.stringify(cookie)); // write to console
	//	//console.log("Cookie Change: " + cookie.name);
	//});
	
	chrome.webRequest.onAuthRequired.addListener(function(token)
	{
		console.log("Authentication Required: " + token.url); // write to console
	});
	
	
});
