
// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello world ;)");
});

// Hello there... don't mind me
chrome.tabs.onUpdated.addListener(function(tabID, tab){
    chrome.storage.local.get(["URLs"], function(result) {
        var temp = result.URLs;
        var url = tab.url;
        if(temp === undefined || url === undefined || url == "N/A"){
        }
        else if((url.includes(temp[0])) || (url.includes(temp[1])) || (url.includes(temp[2])) || (url.includes(temp[3])) || (url.includes(temp[4]))){
            chrome.tabs.update(tabID, {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
        }
    });
});


