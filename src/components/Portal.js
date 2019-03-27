import React from 'react'
import ReactDOM from "react-dom";
const modalRoot = document.getElementById('modal-root');
// portal 练习
class Modal extends React.Component {
    constructor(props){
        super(props);
        this.el = document.createElement('div');
        console.log(this.el);
    }
    componentDidMount() {
        // 这里 子组件最终挂在到modal-root'上 
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    // ReactDOM.createPortal() 传递两个参数，第一个是子组件，第二个是 真实的dom，意思：把组件直接挂在到 指定的真实的dom上
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Child extends React.Component {
   render() {
       return (
           <div className="child">
                modal里面的元素
           </div>
       )
   }
}

class Parent extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // 点击 孩子节点，还是可以通过冒泡机制 触发 这里的handleClick函数 
        console.log('点击');
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <Modal>
                    <Child></Child>
                </Modal>
            </div>
        )
    }
}

export default Parent;