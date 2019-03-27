import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers/index";
import { defaultData } from "./initState/initData";
import thunk from 'redux-thunk'

// 虚拟dom和diff
import {createElement, render, renderDom} from './utils/virtualDomRealize/element'
import {diff, patch} from './utils/virtualDomRealize/diff'

// let store = createStore(todoApp, defaultData,applyMiddleware(thunk));
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// 虚拟dom
var virtualDom = createElement('div',{ id: 'app', class: 'test'},[
  createElement('button',{class: 'button',id: 'button1', onclick: "buttonClick()"},[ '改变dom']),
  createElement('p',{class: 'p-1'},[ 'p元素']),
  createElement('input',{class: 'input-1',type: 'text',value: '初始化input'}),
  createElement('div',{class: 'div-2'},[
    createElement('span',{class: 'span-1'},['span1测试']),
    createElement('span',{class: 'span-2'},['span2测试']),
    createElement('span',{class: 'span-2'},['span3测试']),
  ]),
  createElement('script',{}, [ `function buttonClick() {
    alert('点击1');
  }`])
])

console.log(virtualDom);

// 生成真实的dom
var realDom = render(virtualDom);
// 挂在dom
renderDom(realDom, document.getElementById("root"));

 // 改变后的dom
 var changedVirtualDom = createElement('div',{ id: 'app', class: 'test'},[
  createElement('button',{class: 'button',onclick: "buttonClick()"},[ '改变dom']),
  createElement('p',{class: 'p-1 p-test'},[ 'p1元素']),
  createElement('input',{class: 'input-1',type: 'text',value: '初始化input', id: 'inputId'}),
  createElement('div',{class: 'div-2'},[
    createElement('span',{class: 'span-1'},['span1测试']),
    createElement('span',{class: 'span-2'},['span2测试']),
  ]),
  createElement('p',{class: 'p-2'},[ 'p2元素']),
  createElement('script',{}, [ `function buttonClick() {
    alert('点击2');
  }`]),
  createElement('p',{class: 'p-3'},[ 'p3元素']),
])

// 查找不同
var patchs = diff(virtualDom, changedVirtualDom);
console.log(patchs);
// 更新真实dom
setTimeout(() => {
  patch(realDom, patchs);
},2000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
