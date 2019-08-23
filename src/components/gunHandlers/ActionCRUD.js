import Gun from 'gun/gun';
import React from 'react';
var db = Gun();
//var currentAction = localStorage.getItem('currentAction');
function newAction(action, name){
  var actionObj = {[name]: action};
  var ref = db.get('actionIndex').set(action);
  return ref;
}
function newTab(tab, actionRef){
  var url = tab['url'];
  var tabObj = {[url]: tab};
  var ref = db.get('tabIndex').set(tabObj);
  actionRef.get('tabs').set(ref);
  actionRef.get('tabs').get('tabIndex').map().once(d=> console.log(d));
  return ref;
}
export function createAction(name, tab){
  console.log(tab);
  var action = {
    name: name,
    createdAt: new Date().toISOString(),
    isOpen: true
  };
  var saveAction = newAction(action, name);
  // var saveTab = newTab(tab, saveAction);
  newTab(tab, saveAction);
}
export function addTabToAction(action, tab){
 const newTab = db.get(tab['title']).put(tab);
 db.get('actions').get(action).get('tabs').set(newTab);
}

export function mapActions(){
  var actions = [];
  var counter = 0;
  db.get('actionIndex').map().on(function(data){
    console.log(data);
    actions.push(data);
    var tabData = [];
    db.get('actionIndex').get(data).get('tabs').map().on(function(tab){
      console.log(tab);
      delete actions[counter]['tabs']
      tabData.push(tab);
    })
  actions[counter]['tabs'] = tabData;
  counter ++;
  });
  return actions;
}