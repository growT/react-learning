import React, { Component } from "react";

class FormDemo extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log(this.name.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        defaultValue="李四"
                        ref={input => {
                            this.name = input;
                        }}
                    />
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }
}

export default FormDemo;
