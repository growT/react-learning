import React,{Component} from 'react'
// click 事件的各种练习
class Demo1 extends Component {
    constructor() {
        super();
        this.handleClick1 = this.handleClick1.bind(this);
        this.state= {
            count: 0,
        }
    }
    handleClick1() {
        console.log('click1');
        console.log(this);
    }
    handleClick5() {
        console.log('click5');
        console.log(this); 
    }
    handleClick6 = () => {
        console.log('click6');
        console.log(this); 
    }
    handleClick2() {
        console.log('click2');
        console.log(this);//undefined
    }
    handleClick3(name,e) {
        console.log('click3');
        console.log("name : " + name);
        console.log(this);
        console.log(e);
    }
    handleClick4(name, e) {
        console.log('click4');
        console.log("name : " + name);
        console.log(this);
        console.log(e);
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1 });
        console.log("console: " + this.state.count); // 0
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("console from callback: " + this.state.count); // 2
        });
        this.setState(prevState => {
            console.log("console from func: " + prevState.count); // 1
            return {
                count: prevState.count + 1
            };
        }, ()=>{
            console.log('last console: '+ this.state.count)
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>绑定this点击1（在构造函数中bind）</button>
                <button onClick={this.handleClick5.bind(this)}>绑定this点击2(bind)</button>
                <button onClick={this.handleClick6}>绑定this点击3（箭头函数）</button>
                <button onClick={this.handleClick2}>不绑定this点击</button>
                <button onClick={(e) => this.handleClick3('233',e)}>传递参数点击</button>
                <button onClick={this.handleClick4.bind(this, 'bind')}>传递参数点击</button>
            </div>
        )
    }
}

export default Demo1;