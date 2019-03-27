import React, { Component } from 'react';
import './App.css';
// import Game from './game.js'
// import Demo1 from './demo1.js'
// import FormDemo1 from './FormDemo1'
// import FormDemo2 from './FormDemo2'
// import CombinationTest from './CombinationTest'
// import SearchTable from './SearchTable'
// import ContextTest from './ContextTest'
// import FragmentTest from './FragmentTest'
// import HocComponent from './HOCComponent'
// import ForwardRefs from './ForwardRefs'
// import RenderProps from './RenderProps'
// import CarDemo from './reduxTest'
import CarDemo2 from './reactReduxTest'
import Parent from './Portal'

class App extends Component {
  constructor() {
    super()
    this.forwordRefs = React.createRef();
  }
  componentDidMount() {
    console.log('forwardRefs',this.forwordRefs);
  }
  render() {
    return (
      <div className="App">
       <Parent/>
        {
  
        // <CarDemo2 />
        /* <Game />
        <Demo1 />
        <FormDemo1 />
        <FormDemo2 />
        <CombinationTest
          title = {
            <span>titleName 对应 props.title</span>
          }
          footer = {
            <span>footer 对应 props.footer</span>
          }
        >
          <div>
            <p>内容区域</p>
            <p>内容区域</p>
            <p>内容区域 对应props。children</p>
          </div>
        </CombinationTest>
        <SearchTable products={PRODUCTS}/>
        <ContextTest />
        <FragmentTest />
        <HocComponent title="高阶函数" content="哈哈哈哈哈哈" />
        <ForwardRefs title="forwardRefs" content="高阶函数使用React.forwardRefs "  ref={this.forwordRefs}/>
        <RenderProps /> */}
      </div>
    );
  }

}


// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
export default App;
