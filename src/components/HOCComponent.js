import React,{Component} from 'react'
// 高阶组件 练习
function HocComponent(WaperComponnet) {
    return class extends Component {
        componentWillReceiveProps(preProps,props) {
            console.log('preProps',preProps);
            console.log('props',props);
        }
        componentDidMount() {
            console.log('props',this.props);
        }
        render() {
            return (
                <>
                    <WaperComponnet {...this.props}></WaperComponnet>
                    <p>提示：这些都是高阶函数</p>
                </>
            )
        }
    }
}
class WaperComponnet extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default HocComponent(WaperComponnet);