chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  chrome.tabs.get(tabId, (tab) => {
    if (tab.url.includes("youtube.com")) {
      alert("You closed a YouTube tab!");
    }
  });
});