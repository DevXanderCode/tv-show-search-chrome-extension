chrome.storage.local.get(["shows"], (res) => {
  console.log("Popup shows", res?.shows);
  for (const show of res?.shows) {
    renderShow(show);
  }
});

function renderShow(showData) {
  const showDiv = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = showData?.show?.name;

  const image = document.createElement("img");
  image.src = showData?.show?.image?.medium;

  showDiv.appendChild(title);
  showDiv.appendChild(image);
  document.body.appendChild(showDiv);
}
