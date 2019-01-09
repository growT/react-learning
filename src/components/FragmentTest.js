import React,{Component} from 'react'

class TrDemo extends Component {
    render() {
        return (
            <>
            <td>{this.props.tr.name}</td>
            <td>{this.props.tr.value}</td>
            </>
        )
    }
}
class FragmentTest extends Component {
    constructor() {
        super();
        this.state = {
           tableData: [
               {name: 'td1',value: 'value1'},
               {name: 'td2',value: 'value2'},
               {name: 'td3',value: 'value3'},
               {name: 'td4',value: 'value4'},
            ]
        }
    }
    render() {
        return (
            <table>
                <tbody>
                    {
                        this.state.tableData.map((item,index) => 
                            (<tr key={'tr' + index}>
                                <TrDemo tr={item} key={index}></TrDemo>
                            </tr>)
                        ) 
                    }
                </tbody>
            </table>
        )
    }
}

export default FragmentTest;