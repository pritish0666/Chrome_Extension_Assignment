function getTitle() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    var currentTab = tabs[0];
    console.log(currentTab);
    document.getElementById("title").textContent = currentTab.title;
  });
}

document.getElementById("btn").onclick = getTitle;
