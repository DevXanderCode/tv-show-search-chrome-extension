chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  });
  chrome.contextMenus.create({
    title: "Search Tv Show",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log("context menu event", event);
    // chrome.search.query({
    //   disposition: "NEW_TAB",
    //   text: `imdb ${event.selectionText ?? ""}`,
    // });
    // chrome.tabs.query({ currentWindows: true }, (tabs) => {
    //   console.log("Logging tabs", tabs);
    // });

    // chrome.tabs.create({
    //   url: `https://www.imdb.com/find?q=${event?.selectionText}&ref_=nv_sr_sm`,
    // });

    fetch(
      `https://api.tvmaze.com/search/shows?q=${
        event?.selectionText || "Black clover"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Logging tv shows data", data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  });
});

// console.log("background script running");

// chrome.storage.local.get(["text"], (res) => {
//   console.log("logging local storage", res);
// });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log("Logger", msg, sender, sendResponse);
//   // sendResponse("received message from background");
//   // chrome.tabs.sendMessage(
//   //   sender.tab.id,
//   //   "send your message from the background"
//   // );
// });
