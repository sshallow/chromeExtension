chrome.runtime.onInstalled.addListener(() => {
    // 注册规则或执行其他安装时需要的任务
    console.log("Extension installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("google.com/search?q=") && changeInfo.status === "complete") {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        });
    }
});
