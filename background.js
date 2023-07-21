import "./log.js"

// 监听安装事件
chrome.runtime.onInstalled.addListener(() => {
  console.log('扩展程序已安装');

  // 插件上显示徽章
  chrome.action.setBadgeText({
    text: "ON",
  });
});

// 监听来自 content script 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getBookmarks') {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      sendResponse(bookmarkTreeNodes);
    });
    return true;
  }
});

// 您还可以监听书签的更改，并相应地更新同步存储
chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  console.log('onCreated', id, bookmark)
});

// 书签API使用示例
// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/bookmarks/popup.js