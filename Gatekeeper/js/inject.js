var localStorage = chrome.storage.local;
localStorage.clear(function()
{
	alert("Local storage removed"); // for testing
});

