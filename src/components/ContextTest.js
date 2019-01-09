import React,{Component} from 'react'
import './ContextTest.css'
var ThemContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {}
});

class LastDom extends Component {
    render() {
        console.log(this.props.toggleTheme)
        console.log(this.props.theme);
        return (
            <div>
                <p className={this.props.theme}>这是一个测试Context一句</p>
                <button onClick={this.props.toggleTheme}>点击更换主题</button>
            </div>
        )
    }
}
class BottomComponent extends Component {
    render() {
        return (
            <ThemContext.Consumer>
                {
                    ({theme,toggleTheme}) => 
                        (
                            <LastDom toggleTheme={toggleTheme} theme = {theme}/>
                        )
                }
            </ThemContext.Consumer>
        )
    }
}
class MiddleComponent extends Component {
    render() {
        return (
            <BottomComponent></BottomComponent>
        )
    }
}
class ContextTest extends Component {
    constructor() {
        super();
        this.toggleTheme = ()=> {
            this.setState((state) =>({
                theme : state.theme === 'light' ? 'dalk' : 'light'
            }))
        }
        this.state = {
            theme : 'dalk',
            toggleTheme: this.toggleTheme,
        }
    }
    render() {
        return (
            <ThemContext.Provider  value={this.state}>
                <MiddleComponent></MiddleComponent>
            </ThemContext.Provider>
        )
    }
}

export default ContextTest;