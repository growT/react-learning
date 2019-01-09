import React, { Component } from "react";

class FormDemo extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "张三"
        };
    }
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleSubmit(e) {
        console.log(this.state.name);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }
}

export default FormDemo;
