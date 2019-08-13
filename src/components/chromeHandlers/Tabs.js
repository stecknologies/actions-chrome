export function getTabData() {
  return new Promise((resolve, reject) => {
    window.chrome.tabs.query({currentWindow: true}, resolve);
  });
}
