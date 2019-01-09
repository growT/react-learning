import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  addCar,
  deleteCar,
  updateCar,
  searchCars
} from "../actions/carActions";
import {get_users} from "../actions/useActions";

/**
 * @Description: 使用 react-redux
 */

let getUserList = () => {
  //返回函数 使用thunk使dispatch接受函数作为action
  return dispatch => {
    dispatch(
      get_users({
        status: "pedding",
        userList: []
      })
    );
    return axios
      .get("https://open.che300.com/api/models/query/2285")
      .then(function(response) {
        dispatch(
          get_users({
            status: response.data.code >= 0 ? "success" : "fail",
            userList: response.data.data.list
          })
        );
      })
      .catch(function(error) {
        dispatch(
          get_users({
            status: "fail",
            userList: []
          })
        );
      });
  };
};

//ui组件
class carDemo extends Component {
  componentDidMount() {
    console.log(this.props.getInitDate)
    this.props.getInitDate();
  }
  render() {
    let carListElements = this.props.carList.map((element, index) => {
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
        {this.props.userInfo.status}
        <p>车列表</p>
        {carListElements}
        <input ref={input => (this.input = input)} />
        <div>
          <button onClick={this.props.addCar}>添加</button>
          <button onClick={() => this.props.deleteCar(this.input)}>删除</button>
          <button onClick={this.props.updateCar}>更新</button>
          <button onClick={() => this.props.searchCar(this.input)}>搜索</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carList: state.carList,
    userInfo: state.userInfo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addCar: () => dispatch(addCar({ name: "奥迪", carId: "aodi" })), //注意这里是function 而不是返回的dispatch
    deleteCar: input => dispatch(deleteCar(input.value)),
    updateCar: () =>
      dispatch(updateCar("aodi", { name: "奥迪A3", carId: "aodiA3" })),
    searchCar: input => dispatch(searchCars(input.value)),
    getInitDate: ()=>{dispatch(getUserList())}
  };
}

let carDemo2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(carDemo); //通过connect返回的容器组件

export default carDemo2;
