import Gun from 'gun/gun';
import React from 'react';
// import 'gun/sea';
// import 'gun/lib/webrtc';
// import 'gun/lib/open';
const db = Gun();
const currentAction = localStorage.getItem('currentAction');
export function createAction(name, tab){
  console.log(tab);
  const newName = tab['title'];
  const action = {
    name: newName,
    createdAt: new Date().toISOString(),
    isOpen: true
  };
  const newAction = db.get(newName).put(action);
  db.get('actions').set(newAction);
  db.get('actions').get(newName).get('tabs').get(tab['title']).put(tab);
  localStorage.setItem('currentAction', newName);
  //tab.title is name for now
}
export function addTabToAction(action, tab){
 db.get('actions').get(action).get('tabs').get(tab['title']).put(tab);
}

export function mapActions(){
  var actions = [];
  var counter = 0;
  db.get('actions').map().on(function(data){
    actions.push(data);
    db.get('actions').get(data['name']).get('tabs').map().on(function(tab){
    console.log(tab['title']);
    // delete actions[counter]['tabs'];
    // actions[counter]['tabs'] = tab;
    counter ++;
    })
  })
  return actions;
}
