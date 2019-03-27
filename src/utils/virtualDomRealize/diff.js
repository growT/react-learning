import {render} from './element'
// diff 算法,比较出新老节点的差异
function diff(oldNode, newNode) {
    var patchers ={};
    var index = 0;
    walk(oldNode, newNode, patchers, index)
    return patchers;
}
var num = 0; // 一定要添加,不能传递index 在递归的时候
function walk(oldNode, newNode, patchers,index) {
    var patch = [];
    // 判断节点是否存在
    if( !newNode) {
        patch.push({type: 'REMOVE', text: index})
    }else {
        // 判断是否是文本节点
        if(isString(oldNode) && isString(newNode)) {
            if(oldNode !== newNode) {
                patch.push({type: 'TEXT', text: newNode})
            }
        }else {
            // 判断节点类型是否相同
            if(oldNode.type === newNode.type) {
                // 节点类型相同,判断属性是否变化
                var attrs = diffAttr(oldNode.attrs, newNode.attrs)
                patch.push({type: 'ATTR',attrs: attrs })
                // 判断子节点是否相同
                if(oldNode.children) {
                    oldNode.children.forEach((item,i) =>{
                        walk(item, newNode.children[i], patchers, ++num);
                    })
                    if(oldNode.children.length < newNode.children.length) {
                        patch.push({type: 'ADD',node: newNode.children.slice(oldNode.children.length, newNode.children.length) })
                    }
                }
                
            }else {
                patch.push({type: 'REPLACE', node: newNode})
            }
        }
    }
    // 存在差异
   if(patch.length > 0) {
        patchers[index] = patch;
   }
}
// 判断属性是否差异
function diffAttr(oldAttr,newAttr) {
    let patch = {};
    for(var key in oldAttr) {
        // 判断是否删除了属性
        if(!newAttr[key]) {
            patch[key] = null;
            continue;
        }
        // 判断是否替换了属性值
        if(oldAttr[key] !== newAttr[key]) {
            patch[key] = newAttr[key];
        }
    }
    for(var key in newAttr) {
        // 判断是否添加了新属性
        if(!oldAttr[key]) {
            patch[key] = newAttr[key];
        }
    }
    return patch;
}

var index = 0; // 这里的index必须在外部声明，不能再递归函数中 传递index,因为递归子节点回来之后，index会变成原来的值
// 给元素添加补丁,
function patch(el, patchers) {
    patchNode(el, patchers);
}
// 给 节点添加补丁
function patchNode(el, patchers) {
    // 获得当前节点的补丁
    var currentPatch = patchers[index++];
    // 如果有补丁的话,整合到节点上
    if(currentPatch && currentPatch.length > 0) {
        currentPatch.forEach(patch => {
            switch(patch.type) {
                case 'REMOVE' : // 删除
                    el.parentNode.removeChild(el);
                   el = null; // 删除节点后置为 null为了防止 后面el孩子的遍历
                break;
                case 'TEXT' : // 文本替换
                    el.textContent = patch.text;
                break;
                case 'REPLACE' : // 节点替换
                    console.log(index);
                    el.parentNode.replaceChild( render(patch.node), el);
                break;
                case 'ATTR' : // 属性替换
                    patchAttr(el, patch.attrs)
                break;
                case 'ADD' : // 添加
                    patch.node && patch.node.forEach(item => {
                        let node = render(item)
                        el.appendChild(node)
                    })
                break;
                default:
                break;
                
            }
        });
    }
    // 获得当前节点的孩子节点
    var childrenNode = el && el.childNodes;
    // 如果有孩子节点递归遍历给孩子节点添加补丁
    childrenNode && childrenNode.forEach(item => {
        patchNode(item, patchers);
    })
}
// 给节点的属性 添加补丁
function patchAttr(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}

function isString(str){ 
    return (typeof str=='string')&&str.constructor==String; 
} 
export {
    diff,
    patch
}