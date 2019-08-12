export async function getTabData(){
  let tabs = [];
  await window.chrome.tabs.query({currentWindow: true}, function(data){
    for(let tab in data){
      tabs.push(tab.url);
    }
  });
  return tabs;
}
