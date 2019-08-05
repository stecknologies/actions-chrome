import Gun from 'gun/gun';
import React from 'react';
// import 'gun/sea';
// import 'gun/lib/webrtc';
// import 'gun/lib/open';
const db = Gun();
const currentFlow = localStorage.getItem('currentFlow');
export function createFlow(name, url, siteName){
  const sessionInstance = {
    start: new Date().toISOString(),
    end: ''
  }
  const urlInstance = {
    url: url,
    siteName: siteName,
    sessions: sessionInstance,
    isOpen: true
  }
  const flow = {
    name: name,
    urls: urlInstance,
    createdAt: new Date().toISOString(),
    sessions: sessionInstance,
    isOpen: true
  }
  console.log(flow);
  db.get('flows').get(name).put(flow);
  localStorage.setItem('currentFlow', name);
  // db.get('flows').get(name).get('urls').get('url').once(function (flow) {
  //   console.log("flow urls" + flow);
  // })
}

export function mapFlowInstance(){
  let urlData, flowData;
  db.get('flows').get(currentFlow).get('urls').on(function (url){
    urlData = url;
  });
  db.get('flows').get(currentFlow).on(function (flow){
    flowData = flow;
  });
  let allData = {url: urlData, flow: flowData};
  return allData;
}

export function getCurrentFlowUrl(){
  let currentUrl;
  db.get('flows').get(currentFlow).get('urls').on(function (url) {
    currentUrl = url['url'];

  });
  return currentUrl;
}
// export function mapFlows(){
//   return
// }
