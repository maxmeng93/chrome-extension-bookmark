chrome.bookmarks.getTree((tree) => {
  console.log('tree1', tree[0].children[0].children)
});

// https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/bookmarks/popup.js

// 刷新弹出窗口
// location.reload(); 