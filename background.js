// 书签API使用示例
// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/bookmarks/popup.js

// 当新书签创建时触发
chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
  syncToServer('onCreated', bookmark)
});

// 当书签被删除时触发
chrome.bookmarks.onRemoved.addListener(function(id, removeInfo) {
  syncToServer('onRemoved', removeInfo)
});

// 当书签被修改时触发
chrome.bookmarks.onChanged.addListener(function(id, changeInfo) {
  syncToServer('onChanged', changeInfo)
});

// 当书签被移动时触发
chrome.bookmarks.onMoved.addListener((id, moveInfo) => {
  syncToServer('onMoved', moveInfo)
});

function syncToServer(str, info) {
  // 同步到服务器
  console.log('str', str);

  fetch('http://localhost:3000/api/bookmark/log', {
    method: 'POST',
    body: JSON.stringify({str, ...info}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}


// 监听安装事件
// chrome.runtime.onInstalled.addListener(() => {
//   console.log('扩展程序已安装');

//   // 插件上显示徽章
//   chrome.action.setBadgeText({
//     text: "ON",
//   });
// });

// 监听来自 content script 的消息
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'getBookmarks') {
//     chrome.bookmarks.getTree((bookmarkTreeNodes) => {
//       sendResponse(bookmarkTreeNodes);
//     });
//     return true;
//   }
// });
