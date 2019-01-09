import React,{Component} from 'react'

class FormDemo extends Component {
    render() {
        return (
            <div>
               <div>{this.props.title}</div>
               <div>{this.props.children}</div>
               <div>{this.props.footer}</div>
            </div>
        )
    }
}

export default FormDemo;