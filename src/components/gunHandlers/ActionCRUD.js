import Gun from 'gun/gun';
import React from 'react';
var db = Gun();
var currentAction = localStorage.getItem('currentAction');

export function createAction(name, tab){
 var tabTitle = String(tab['title'] + tab['id']);
 db.get('actions').get(name).put({
  name: name,
  createdAt: new Date().toISOString()
 });
 db.get('actions').get(name).get('tabs').get(tabTitle).put({url: tab['url'], title: tab['title'], id: tab['id']});
 localStorage.setItem('currentAction', name);
}
export function addTabToAction(action, tab){
 // const newTab = db.get(tab['title']).put(tab);
 // db.get('actions').get(action).get('tabs').set(newTab);
}

export function mapActions(){
  var actions = [];
  var counter = 0;
  if(currentAction){
    db.get('actions').map().on(function(data){
      console.log(data);
      actions.push(data);
      var tabData = [];
      console.log(data['name']);
      db.get('actions').get(data['name']).get('tabs').map().on(function(tab){
        console.log("tab", tab);
        tabData.push(tab);
      })
      console.log(tabData);
      actions[counter]['tabs'] = tabData;
      counter ++;
    });
  }
  else{
    console.log("No actions have been created, so nothing will be mapped.")
  }
  return actions
}
