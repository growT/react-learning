
import React, {Component} from 'react'
import './index.less'
import loadScript from '../../utils/utils'

const colors = ['red','blue','green']
const lessUrl =
            'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js';
class ChangeSkin extends Component {
    handleColorChange  = (color) =>{
        // 如果Less已经加载了，就去改变颜色，如果Less没有加载就，首先加载less在去改变颜色
        if(this.isLessLoad) {
            this.changeColor(color);
        }else {
            loadScript(lessUrl,() =>{
                // less加载完成
                this.changeColor(color);
                this.isLessLoad = true;
            })
        }
    }
    changeColor = (color) => {
        window.less.modifyVars({
            '@primary-color': color,
            '@bg-color': '#2f54eb'
        }).then(() =>{
            console.log('修改样式成功');
        })
    }
    render() {
        return (
            <div>
                {/* 改变颜色的选项 */}
                <div className="colors">
                    {
                        colors.map(color => (
                           (<div 
                                style={{color}}
                                className="color-item"
                                key={color}
                                onClick={() => this.handleColorChange(color)}>
                                {color}
                            </div>)
                        ))
                    }
                </div>
                {/* 呈现颜色 */}
                <div className="color-box">
                    实现换肤
                </div>
            </div>
        )
    }
}

export default ChangeSkin;