import React, { Component } from "react";

function ForwardRefs(WaperComponnet) {
    class LogProps extends Component {
        componentWillReceiveProps(preProps, props) {
            console.log("preProps", preProps);
            console.log("props", props);
        }
        componentDidMount() {
            console.log("props", this.props);
        }
        render() {
            let { forwardRefs, ...rest } = this.props; //因为 ref不能像props一样传递，所以就把它封装成了一个props属性，来存refs
            return (
                <>
                    <WaperComponnet {...rest} ref={forwardRefs} />
                    <p>提示：这些都是高阶函数</p>
                </>
            );
        }
    }
    function FofwardRef(props, ref) {
        return <LogProps {...props} forwardRefs={ref} />; //通过数据forwardRefs 传递 ref
    }

    return React.forwardRef(FofwardRef); //本来直接返回一个匿名的class就行了，现在需要把 class起名封装过后再返回
}
class WaperComponnet extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default ForwardRefs(WaperComponnet);
