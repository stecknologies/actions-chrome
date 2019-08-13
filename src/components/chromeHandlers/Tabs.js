import React from 'react';
export function getTabData() {
  return new Promise((resolve, reject) => {
    window.chrome.tabs.query({currentWindow: true}, resolve);
  });
}

export async function doTabsStuff() {
  const tabs = await getTabData();
  });
  // do something with tabs array
  return tabs.map(i=> <li>{i.title}</li>);
}
