export async function getTabData(){
  let tabs = [];
  await window.chrome.tabs.query({currentWindow: true}, function(data){
    console.log(data);
    console.log(typeof data[0]);
    for(let i=0; i<data.length; i++){
      tabs.push(data[i]);
    };
  });
  return tabs;
}
