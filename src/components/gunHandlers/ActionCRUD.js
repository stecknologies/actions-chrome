import Gun from 'gun/gun';
import React from 'react';
var db = Gun();
var currentAction = localStorage.getItem('currentAction');
export function createAction(name, tab){
  var action = {
    name: name,
    createdAt: new Date().toISOString(),
    isOpen: true
  };
  var newAction = db.get(name).put(action);
  db.get('actions').set(newAction);
  var newTab = db.get(tab['url']).put(tab);
  db.get('actions').get(name).get('tabs').set(tab);
  db.get('actions').get(name).get('tabs').map().once((data) => console.log(data));
  localStorage.setItem('currentAction', name);
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
