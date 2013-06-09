console.log("Gatekeeper Loaded"); // write to console

$(function()
{
	
	$("#remove").click(function()
	{		
		chrome.cookies.remove({"url": "https://.facebook.com", "name" : "c_user"});
		//chrome.cookies.remove({"url": "https://.facebook.com", "name" : "presence"});
		//chrome.cookies.remove({"url": "https://.facebook.com", "name" : "s"});
		//chrome.cookies.remove({"url": "https://.facebook.com", "name" : "xs"});
	
	});
	
	$("#set").click(function()
	{		
		chrome.cookies.set({"url": "https://facebook.com", "domain" : ".facebook.com", "name" : "c_user", "value" : "100006096543501", "secure" : true});
		chrome.cookies.set({"url": "https://facebook.com", "domain" : ".facebook.com", "name" : "presence", "value" : "EM370769391EuserFA21B06096543501A2EstateFDsb2F0Et2F_5b_5dElm2FnullEuct2F1370768586BEtrFnullEtwF278556754EatF1370769369749G370769391665CEchFDp_5f1B06096543501F1CC", "secure" : true});	
		chrome.cookies.set({"url": "https://facebook.com", "domain" : ".facebook.com", "name" : "s", "value" : "", "secure" : true});
		chrome.cookies.set({"url": "https://facebook.com", "domain" : ".facebook.com", "name" : "xs", "value" : "", "secure" : true});
		
		//chrome.tabs.getCurrent(function(tab)
		//{
			//console.log(tab.url);

		//});
		
	});
		
	// fires when cookies are changed
	chrome.cookies.onChanged.addListener(function(cookie) 
	{
		console.log("Cookie Changed: " + JSON.stringify(cookie)); // write to console
		//console.log("Cookie Change: " + cookie.name);
	});
	
});
