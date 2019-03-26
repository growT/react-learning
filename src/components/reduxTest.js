import React, { Component } from "react";

import { get_users } from "../actions/useActions";
import axios from "axios";

import todoApp from "../reducers/index";
import { defaultData } from "../initState/initData";
import { createStore,applyMiddleware  } from "redux";
import thunk from 'redux-thunk'

import {
  addCar,
  deleteCar,
  updateCar,
  searchCars
} from "../actions/carActions";
let store = createStore(todoApp, defaultData,applyMiddleware(thunk));

/**
 * @Description: 没有使用 react-redux,只是纯使用的 redux的createStore,store.dispatch(action) 会自动调用 reducer
 */
class carDemo extends Component {
  constructor() {
    super();
    this.state = {
      carList: [],
      userInfo: {
        status: '',
        userList: []
      }
    };
    this.addCar = this.addCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.searchCar = this.searchCar.bind(this);
    this.getStore = this.getStore.bind(this);
    this.getUserList = this.getUserList.bind(this);
  }
  componentDidMount() {
    this.getStore();
    console.log("mounted");
    //可以不要回调函数
    store.dispatch(this.getUserList())
    .then(() =>{
      console.log(store.getState());
      this.setState({ userInfo: store.getState().userInfo });
    }  
  );
  }
  getUserList() {
    //返回函数 使用thunk使dispatch接受函数作为action
    return (dispatch) => {
      dispatch(
        get_users({
          status: 'pedding',
          userList: []
        })
      );
      return axios.get("https://open.che300.com/api/models/query/2285")
      .then(function(response) {
        dispatch(
          get_users({
            status: response.data.code >= 0 ? 'success' : 'fail',
            userList: response.data.data.list
          })
        );
      })
      .catch(function(error) {
        dispatch(
          get_users({
            status: 'fail',
            userList: []
          })
        );
      });
    }
  }
  getStore() {
    let state = store.getState(); //获得redux中的state
    this.setState({ carList: state.carList,userInfo: state.userInfo }, () => {
      console.log(this.state);
    });
  }
  addCar() {
    store.dispatch(addCar({ name: "奥迪", carId: "aodi" })); //分发action
    this.getStore();
  }
  deleteCar() {
    store.dispatch(deleteCar("aodi")); //分发action
    this.getStore();
  }
  updateCar() {
    store.dispatch(updateCar("aodi", { name: "奥迪A3", carId: "aodiA3" })); //分发action
    this.getStore();
  }
  searchCar() {
    store.dispatch(searchCars("aodi")); //分发action
    this.getStore();
  }
  render() {
    let carListElements = this.state.carList.map((element, index) => {
      return (
        <div key={index}>
          <span>{element.name}</span>
          <span>{element.carId}</span>
        </div>
      );
    });
    return (
      <div>
        <p>用户状态</p>
        {this.state.userInfo.status}
        <p>车列表</p>
        {carListElements}
        <div>
          <button onClick={this.addCar}>添加</button>
          <button onClick={this.deleteCar}>删除</button>
          <button onClick={this.updateCar}>更新</button>
          <button onClick={this.searchCar}>搜索</button>
        </div>
      </div>
    );
  }
}

export default carDemo;
