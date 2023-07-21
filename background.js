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

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  console.log('A bookmark was created:', id, bookmark);
});

chrome.bookmarks.onRemoved.addListener((id, removeInfo) => {
  console.log('A bookmark was removed:', id, removeInfo);
});

chrome.bookmarks.onChanged.addListener((id, changeInfo) => {
  console.log('A bookmark was changed:', id, changeInfo);
});

chrome.bookmarks.onMoved.addListener((id, moveInfo) => {
  console.log('A bookmark was moved:', id, moveInfo);
});

// 

// 根据标题查询书签
chrome.bookmarks.search('My Bookmark', (results) => {
  console.log(results);
});

// 根据URL查询书签
chrome.bookmarks.search('https://example.com', (results) => {
  console.log(results);
});

// 使用查询对象查询书签
chrome.bookmarks.search({ title: 'My Bookmark', url: 'https://example.com' }, (results) => {
  console.log(results);
});