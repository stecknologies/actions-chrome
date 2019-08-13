export function getTabData() {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000);
    window.chrome.tabs.query({currentWindow: true}, resolve);
  });
}

export async function doTabsStuff() {
  const tabs = await Promise.resolve(getTabData());
  return tabs;
}
