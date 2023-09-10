// confirm("hello from content script ");
const text = [];

const aTags = document.querySelectorAll("a");
// console.log("Tags", aTags);

for (const tag of aTags) {
  text.push(tag.textContent);
}

chrome.storage.local.set({
  text,
});

chrome.runtime.sendMessage(null, text, (response) => {
  console.log("send response function with response ", response);
});
