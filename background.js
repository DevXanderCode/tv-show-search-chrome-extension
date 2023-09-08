chrome.runtime.onInstalled.addListener((details) => {
  console.log("extension installed", details);
  chrome.contextMenus.create({
    title: "Text Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log("context menu event", event);
  });

  chrome.contextMenus.create({
    title: "Text Context Menu 1",
    id: "contextMenu2",
    parentId: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.create({
    title: "Text Context Menu 2",
    id: "contextMenu3",
    parentId: "contextMenu1",
    contexts: ["page", "selection"],
  });
});

console.log("background script installed");
