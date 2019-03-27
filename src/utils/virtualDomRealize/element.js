
// 使用js 创建虚拟dom

//虚拟节点
class Element{
    constructor(type,attrs,children) {
        this.type = type; // 节点的类型
        this.attrs = attrs; // 节点的属性
        this.children = children; // 节点的孩子节点
    }
}

//创造节点
function createElement(type,attrs,children) {
    return new Element(type,attrs,children)
} 

//创造真实的节点
function render(virtualDom) {

    // 创建元素
    var el = document.createElement(virtualDom.type);
    // 添加属性
    for(var key in virtualDom.attrs) {
        addAttrs(el, key, virtualDom.attrs[key]);
    }
    // 如果有子节点遍历
    virtualDom.children && virtualDom.children.forEach(child => {
        // 判断 dom是lement类的实例 还是 文本,如果是Element类的实例 就递归
        var childDom = child instanceof Element ? render(child) : document.createTextNode(child);
        el.appendChild(childDom);
    });
    // 一定要return;
    return el;
}

// 给元素添加 
function addAttrs(el, key,value) {
    if(key === 'value') {
        if(el.tagName.toLowerCase === 'input' || el.tagName.toLowerCase === 'textarea'){
            el.value = value;
        }
    }
    el.setAttribute(key, value);
}

// 把真实节点挂载给根节点上
function renderDom(dom, targetDom) {
    targetDom.appendChild(dom);
}
export {
    createElement,
    render,
    renderDom
}
