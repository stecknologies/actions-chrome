// export function getTabData() {
//   return new Promise((resolve, reject) => {
//     window.chrome.tabs.query({currentWindow: true}, resolve);
//   });
// }
import {createAction} from '../gunHandlers/ActionCRUD.js';
const currentAction = localStorage.getItem('currentAction');
export function createFromHandlers(name){
  var promise = new Promise((resolve, reject) => {
    window.chrome.tabs.getCurrent(resolve);
  });
  promise.then(data => createAction(name, data));
}

export function focusOnAction(){
  // get length of tab query
  // remove the indicies in the current action
  window.chrome.tabs.remove()
}
