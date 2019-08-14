import Gun from 'gun/gun';
import React from 'react';
// import 'gun/sea';
// import 'gun/lib/webrtc';
// import 'gun/lib/open';
const db = Gun();
const currentAction = localStorage.getItem('currentAction');
export function createAction(name, tab){
  const action = {
    name: name,
    createdAt: new Date().toISOString(),
    isOpen: true
  }
  console.log(action);
  db.get('actions').get(name).put(action);
  db.get('actions').get(name).get('tabs').put(tab);
  localStorage.setItem('currentAction', name);
  // db.get('flows').get(name).get('urls').get('url').once(function (flow) {
  //   console.log("flow urls" + flow);
  // })
  db.get('actions').get(name).get('tabs').once(function(data){
    console.log(data);
  })
  console.log(tab);
}

// export function mapActionInstance(){
//   let urlData, flowData;
//   db.get('flows').get(currentFlow).get('urls').on(function (url){
//     urlData = url;
//   });
//   db.get('flows').get(currentFlow).on(function (flow){
//     flowData = flow;
//   });
//   let allData = {url: urlData, flow: flowData};
//   return allData;
// }

// export function getCurrentFlowUrl(){
//   let currentUrl;
//   db.get('flows').get(currentFlow).get('urls').on(function (url) {
//     currentUrl = url['url'];
//
//   });
//   return currentUrl;
// }
// export function mapFlows(){
//   return
// }
