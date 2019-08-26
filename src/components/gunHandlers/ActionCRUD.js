import Gun from 'gun/gun';
import React from 'react';
var db = Gun();
//var currentAction = localStorage.getItem('currentAction');

export function createAction(name, tab){
 var tabTitle = String(tab['title'] + tab['id']);
 var action = db.get(name).put({
  name: name,
  createdAt: new Date().toISOString(),
  isOpen: true
 });
 db.get('actions').set(action);
 var thisTab = db.get(tabTitle).put(tab);
 db.get('actions').get(name).get('tabs').set(thisTab);
 db.get('actions').get(name).once(d=> console.log(d));
 db.get('actions').get(name).get('tabs').map().once(d => console.log(d));
}
export function addTabToAction(action, tab){
 // const newTab = db.get(tab['title']).put(tab);
 // db.get('actions').get(action).get('tabs').set(newTab);
}

export function mapActions(){
  var actions = [];
  var counter = 0;
  db.get('actions').map().on(function(data){
    console.log(data);
    var tabData = [];
    // db.get('actions').get(data['name']).get('tabs').map().on(function(tab){
    //   tabData.push(tab);
    // })
    actions.push(data);
    // console.log(tabData);
    // actions[counter]['tabs'] = tabData;
    counter ++;
  });
  return actions;
}