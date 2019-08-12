export async function getTabData(){
  let d = window.chrome.tabs.query({currentWindow: true}, function(data){
    console.log(data);
    return data;
  });
  return d;
}
