import React,{Component} from 'react'
import testImg from '../images/喵喵.jpg'

function RenderProps() {
    return <Mouse render={mouse => <Cat mouse={mouse}/>}/>
}
class Mouse extends Component {
    constructor() {
        super()
        this.state = {
                x: 0,
                y: 0,
        }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
          });
    }
    render() {
        return (
            <div style={{height: '600px',position: 'relative'}} onMouseMove={this.handleMouseMove}>
                <p>鼠标的位置为：x: {this.state.x} y: {this.state.y}</p>
                {this.props.render(this.state)}
            </div>
        )
    }
}
class Cat extends Component {
    render() {
        let mouse = this.props.mouse;
        return (
            <div>
                <img src={testImg} alt="小猫" style={{ position: 'absolute', left: mouse.x, top: mouse.y }}/>
            </div>
        )
    }
}

export default RenderProps;