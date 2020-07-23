---
title: Vue
date: 2020-07-23
sidebar: autoS
tags:
  - Vue
categories:
  - 前端
---





# VUE

---

## Vue 的Render

### `createElement(tag,options,VNodes)` 

- Vue里的虚拟 DOM 即是此函数生成的

    ```js
    // return {Vnode}
    
    createElement(
    	//{ String || Object || Function }
        //一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的 async 异步函数
        'div',
        
        //{Object}
        //一个包含模板属性的数据对象
        {
            //和 v-bind:class 一样的api
            // 接收一个字符串、对象或者对象组成的数组
            'class':{
                foo:true,
                bar:false
            }，
            //和 v-bind:style 一样的api
            // 接收一个字符串、对象、或者对象组成的数组
            style:{
            	color:'red',
            	fontSize:'12px'
        	},
            // 正常的 HTML 特性
            attrs: {
            	id: 'foo'
            },
              // 组件 props
              props: {
                myProp: 'bar'
              },
              // DOM 属性
              domProps: {
                innerHTML: 'baz'
              },
              // 事件监听器基于 `on`
              // 所以不再支持如 `v-on:keyup.enter` 修饰器
              // 需要手动匹配 keyCode。
              on: {
                click: this.clickHandler
              },
              // 仅对于组件，用于监听原生事件，而不是组件内部使用
              // `vm.$emit` 触发的事件。
              nativeOn: {
                click: this.nativeClickHandler
              },
        },
        
        // {String | Array}
      	// 子节点 (VNodes)，由 `createElement()` 构建而成，或使用字符串来生成“文本节点”。可选参数。
        [
            '文字文本'，
            createElement('h1','text'),
        	createElement(MyComponent,{
                props:{
    
                }
    		})
        ]
    
    )
    ```

    

## Vue的diff



## Vue 小知识点

### VUE的双向绑定原理

### 组件通讯

### Vue的 provider

### Vue的插槽  slot

### Computed 和 Watch 的区别

### Vue/React 项目中为什么要在列表组件中书写key值

- `key` 的作用是为了在 `diff`算法执行时更快的找到对应的节点，提高`diff`速度，`key`是给每一个`vnode`的唯一`id`，可以依靠`key`更快更准确的拿到`oldNode`中对应的`vnode`节点

- `virtualDom`是将正式的DOM数据抽取出来，已对象的形式模拟树形结构

    ```js
    	<div>
    		<p>1<p>
    	<div>
    
    //抽象化的virtualDom为
        let vNode={
            tag:'div',
            children:[
                {tag:'p',text:'1'}
            ]
        }
    ```

    

## Vue 路由的钩子函数有哪些

路由导航的钩子函数有三种：

- 全局钩子：beforeEach（）进入之前触发、afterEach（）进入之后触发
- 单个路由里面的钩子：beforeEnter、beforeLeave
- 组件路由： beforeRouterEnter、beforeRouterUpdate、beforeRouterLeave

全局守卫：无论哪个路径都会触发全局的钩子函数，

### Vue创建全局变量以及全局方法

#### 1. 创建方法

- `src`下创建`plugin`文件夹，用来存放插件
- 新建toTop.js

```js
export default {
    install (Vue,options){
        Vue.prototype.$toTop=function(){  //全局方法最好用 $ 开头
            console.log('Plugin Test')
        }
    }
}
```



#### 2. `main.js` 中引入

```js
//插件
import ToTop from './plugin/toTop'

Vue.use(ToTop) //添加
```



#### 3. 使用

- 之后即可在全局自由使用

```js
mounted(){
	this.$toTop()
}
```

​    