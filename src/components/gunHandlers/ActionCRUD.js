import Gun from 'gun/gun';
import React from 'react';
//import 'gun/sea';
// import 'gun/lib/webrtc';
// import 'gun/lib/open';
const db = Gun();
const currentAction = localStorage.getItem('currentAction');
export function createAction(name, tab){
  const newName = tab['title'];
  const action = {
    name: newName,
    createdAt: new Date().toISOString(),
    isOpen: true
  };
  const newAction = db.get(newName).put(action);
  db.get('actions').set(newAction);
  const newTab = db.get(tab['title']).put(tab);
  db.get('actions').get(newName).get('tabs').set(newTab);
  db.get('actions').get(newName).map().on(data => console.log(data));
  localStorage.setItem('currentAction', newName);
}
export function addTabToAction(action, tab){
 const newTab = db.get(tab['title']).put(tab);
 db.get('actions').get(action).get('tabs').set(newTab);
}

export function mapActions(){
  var actions = [];
  var counter = 0;
  db.get('actions').map().on(function(data){
    console.log(data);
    actions.push(data);
    delete actions[counter]['_'];
    var tabData = [];
    db.get('actions').get(data['name']).get('tabs').map().on(function(tab){
      console.log(tab);
      tabData.push(tab);
    });
    actions[counter]['tabs'] = tabData;
    counter ++;
  });
  return actions;
}
