import React, { Component } from 'react';
import './App.css';
// import Game from './components/game.js'
// import Demo1 from './components/demo1.js'
// import FormDemo1 from './components/FormDemo1'
// import FormDemo2 from './components/FormDemo2'
// import CombinationTest from './components/CombinationTest'
// import SearchTable from './components/SearchTable'
// import ContextTest from './components/ContextTest'
// import FragmentTest from './components/FragmentTest'
// import HocComponent from './components/HOCComponent'
// import ForwardRefs from './components/ForwardRefs'
// import RenderProps from './components/RenderProps'
// import CarDemo from './components/reduxTest'
// import CarDemo2 from './components/reactReduxTest'
// import Parent from './components/Portal'
import ChangeSkin from './pages/ChangeSkin'

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
        <ChangeSkin/>
       {/* <Parent/>
       <CarDemo2 />
        <Game />
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
