import {createAction, addTabToAction} from '../gunHandlers/ActionCRUD.js';
const currentAction = localStorage.getItem('currentAction');
export function createFromHandlers(){
  var promise = new Promise((resolve, reject) => {
   //setTimeout(2000);
    window.chrome.tabs.getSelected(null, resolve);
  });
  promise.then(data => createAction(data['title'], data));
}
export function addToAction(action){
  var promise = new Promise((resolve, reject) => {
    setTimeout(2000);
    window.chrome.tabs.getSelected(null, resolve);
  });
  promise.then(function(data){
    console.log("adding " + data['title'] + " to " + action);
    addTabToAction(action, data)}
  );
}
export function getAllTabs(){
  var promise = new Promise((resolve,reject) =>{
    window.chrome.tabs.query(resolve);
  });
  promise.then(data => focusOnAction())
}

export function focusOnAction(allTabs){
  // get length of tab query
  const len = focusOnAction().length;
  // get length from gun -- get an array of the indicies that you have to delete and delete them
  // remove the indicies in the current action
  window.chrome.tabs.remove()
}