chrome.runtime.onInstalled.addListener((details) => {
  console.log("扩展已安装");
});

chrome.action.onClicked.addListener((tab) => {
  console.log("哈哈 Extension icon was clicked");
  // 你的代码...
});

chrome.cookies.getAll({ url: "https://www.notion.so" }, function (cookies) {
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

    // 发起网络请求
    fetch('https://www.notion.so/api/v3/getPublicSpaceData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': cookieString,
        },
        body: JSON.stringify({
            type: "space-ids",
            spaceIds: ["bcdd9f29-efda-4de0-9576-41c99630fdae", "477e8b05-2424-4e8c-b1ec-d72dc84aa666", "799b0d73-8550-47cb-9151-cd2abd21f5fc", "7ff65211-6594-4133-916d-a5af52d6cf75", "d9d52f73-bbd3-47db-96fe-27b0615621ac", "b7193f06-90ed-45e9-9dd7-6d1750cd739a"]
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
