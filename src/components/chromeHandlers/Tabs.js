// export function getTabData() {
//   return new Promise((resolve, reject) => {
//     window.chrome.tabs.query({currentWindow: true}, resolve);
//   });
// }

export function currentTabData(){
  return new Promise((resolve, reject) => {
    window.chrome.tabs.getCurrent(function(data){
      resolve(data);
    });
  });
}
