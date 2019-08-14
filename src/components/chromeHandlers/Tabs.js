// export function getTabData() {
//   return new Promise((resolve, reject) => {
//     window.chrome.tabs.query({currentWindow: true}, resolve);
//   });
// }
import {createAction} from '../gunHandlers/ActionCRUD.js';

export function createFromHandlers(name){
  var promise = new Promise((resolve, reject) => {
    window.chrome.tabs.getCurrent(resolve);
  });
  promise.then(data => createAction(name, data));
}
