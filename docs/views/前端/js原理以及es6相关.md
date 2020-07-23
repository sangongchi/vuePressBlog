---
title: js原理以及es6相关
date: 2020-07-23
sidebar: autoS
tags:
  - js
categories:
  - 前端

---

### js原型链的理解

### 闭包问题（我什么会造成内存泄漏）

#### 1. 闭包示例

```js
//闭包：内部函数使用外部变量
function bibao(){
    let m=1;
    function inner(){
        console.log(m)  //此处内部调用了变量
    }
    return inner
}
let fun=bibao();
fun();
```

#### 2. 闭包作用：

- 访问其他函数内部变量
- 保护变量不被内存回收
- 避免全局变量被污染

#### 3. 闭包的缺点：

- 闭包长期占用会消耗内存，可能会导致内存泄漏

#### 4. 内存泄漏

- 不在用到的内存，没有得到及时的释放，就叫内存泄漏（==memory leak==）

- **每个浏览器都会有自己的回收机制，分配出去的内存不使用便会回收；内存泄漏的根本原因就是，分配出去无法被回收，这些内存还在一直不停的分配导致后面的所用内存不足**。

- *小知识点*：大部分语言都会提供自动的内存管理，称为垃圾回收机制 （==garbage collector==），c语言需要手动的去释放内存，使用 free（）方法。 

    ```js
    window.onload = function(){
        var el = document.getElementById("id");
        el.onclick = function(){
            alert(el.id);
        }
    }
    // 解决方法为
    window.onload = function(){
        var el = document.getElementById("id");
        var id = el.id;          //解除循环引用
        el.onclick = function(){
            alert(id); 
        }
        el = null;               // 将闭包引用的外部函数中活动对象清除
    }//退出函数
    ```

#### 闭包的使用场景

- setTimeout（原生的setTimeout传递的第一个函数不能携带参数，通过闭包可以实现传参效果）

    ```js
    function f1(a){
        function f2(){
            console.log(a)
        }
        return f2
    }
    let fun=f1(2)
    setTimeout(fun,1000)
    ```

    

- 回调

    - 定义某些用户点击事件的触发回调函数

- 函数防抖

    ```js
    function debounce(fn,apply){
        let timer=null
        //借助闭包
        return function(){
            if(timer){
                clearTimeout(timer)
                timer=setTimeout(fn,apply)
            }else{
                timer=setTimeout(fn,apply)
            }
        }
    }
    ```

    

- 封装私有变量

    ```js
    function f1(){
        let sum=0
        let obj={
            inc:function(){
                sum++
                return sum
            }
        }
        return obj
    }
    let result=f1()
    ```

    

### 链表和数组的区别，判断是否有环，寻找环口

*参考*:https://blog.csdn.net/m0_37631322/article/details/81777855

- 链表和数组的区别

    链表是链式存储结构，通过指针来连接元素与元素，数组是顺序存储结构则是将所有元素按照顺序排列，

    链表插入元素，不需要移动，查找元素效率不高，需要一个一个去读取

    随机读取元素时，数组的小效率很高，链表适合插入和删除元素。

    - 数组读取运行时间 O ( 1 )，插入运行时间 O ( n )；
    - 链表读取运行时间 O ( n )，插入运行时间 O ( 1 )；

### JSONP 

- 利用 script 标签的 src  属性来实现跨域，由于使用 script  标签，因此该方法支持 get 请求

- 通过将前端方法作为参数传递到服务端，然后由服务端注入参数后在返回，实现服务端与客户端通信

    ```js
    (function (global) {
      let id = 0;
      let container = document.getElementsByTagName('head')[0];
      function jsonp(options) {
        if (!options || options.url) return;
        let scriptNode = document.createElement('script');
        let data = options.data;
        let url = options.url;
        let callback = options.callback;
        let fnName = 'jsonp' + id++;
    
        //拼接url
        url = url.indexOf('?') > 0 ? url + '&' : url + '?';
        for (let key in data) {
          url += `${key}=${data[key]}&`;
        }
        url = url.slice(url.length - 1);
    
        //出错处理
        scriptNode.onerror = function () {
          callback && callback({ error: 'error' });
          container.removeChild(scriptNode);
          global[fnName] && delete global[global];
        };
    
        scriptNode.src = url;
        scriptNode.type = 'text/javascript';
        container.appendChild(scriptNode);
      }
      global.jsonp = jsonp;
    })(this);
    ```

### js文件异步加载（ async 和 defer 仅适用于引入外部的 js 文件）

1. 将`<script>` 标签放到 `body` 底部

    - 严格来讲，这个不算异步加载，不会造成页面的阻塞，而且加载是可以在脚本中操作 DOM

2. defer 属性

    - 将脚本设置为延迟加载，当浏览器碰到 `script` 带有 `defer` 属性时，会开启一个线程下载 `js` 文件，同时继续解析 `HTML` 文档，等 `HTML` 全部解析完毕 `DOM` 加载完成之后，再去执行  `js` 文件。可以保证 `js` 文件的执行顺序是文档中的书写顺序。

3. async 属性 

    - `async`属性和`defer`属性类似，也是会开启一个线程去下载 `js`文件，但和`defer`不同的时，它会在下载完成后立刻执行，而不是会等到DOM加载完成之后再执行，所以还是有可能会造成阻塞。对多个带有`async`的js文件，它不能像defer那样保证按顺序执行，它是哪个js文件先下载完就先执行哪个。

4. 动态创建 `script` 标签

    ```js
    (function (){
        let scriptEle=document.createElement('script')
        scriptEle.type='text/javascript'
        scriptEle.async=true;
        scriptEle.src='http://dizhi'
        let x=document.getElementsByTagName('head')[0];
        x.insertBefore(scriptEle,x.firstChild)
    })()
    ```

### `js`中的 `Math`

- `Math.round() 四舍五入`
- `Math.ceil() 向上取整`
- `Math.floor() 向下取整`
- `parseInt`  该方法是把小数点后边的小数去掉，只保留整数部分，如果要取整的数为正时，类似`Math.floor()`,所取整数部分为负时，类似`Math.ceil()`.

### 散列表

#### 1. 特性：

- 散列表总是将同样的输入映射到相同的索引

- 散列表的性能：
    1.查找：平均 O(1)，最糟 O(n)
    2.插入：平均 O(1)，最糟 O(n)
    3.删除：平均 O(1)，最糟 O(n)

- ```js
    // js 中 Map 对应的就是散列表，一种 hashMap 结构 
    
    let book = new Map();
    book.set('jartto', 0.67);
    book.set('milk', 1.49);
    book.set('avocado', 1.49);
    
    console.log(book); // {"jartto" => 0.67, "milk" => 1.49, "avocado" => 1.49}
    book.get('jartto'); // 0.67
    ```


#### 2. 散列表适用于

- 模拟映射关系（查找时间复杂度为  O(1) ）

- 防止重复

- 缓存/记住数据

### 事件委托

#### 1. 定义：

​		把一个或者一组元素的事件委托到它的父层或者更外层的元素上，真正绑定事件的是外层元素，当时间响应绑定的元素上是，会通过冒泡机制从而触发它的外层元素的绑定事件。（即讲一个元素的 `click|keydown....`委托给另一个元素）

#### 2. 优点：

- 减少内存消耗
- 动态的绑定事件

### `['1','2','3'].map(parseInt) `输出是什么为什么？

输出  ---->  `[1,NaN,NaN]`

- 首先看下`map`函数， `arr.map(function callback(currentValue,index,array))`

- `parseInt(string,radix)` 用来解析字符串，`string` 表示被处理的字符串值， `radix` 表示解析时候的基数,如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

- 了解这两个函数后，我们模拟下运行情况：

    1. `parseInt（'1',0）`   radix==0 所以按照10为基数，这个时候输出 1
    2. `parseInt('2',1)`    基数为 1（1进制），该值小于2 ，所以无法解析返回NaN
    3. `parseInt('3',2)`    基数为2 （2进制）， 3 不是二进制 返回 NaN

- ```js
    //另一个例子：
    ['10','10','10','10','10'].map(parseInt);
    // [10, NaN, 2, 3, 4]
    ```

#### call和apply 的区别是什么，那个性能更好一些

- `call` 的参数是一个个传递

- `apply` 参数是固定的，目标对象以及参数数组

- `call` 的性能要比`apply` 好一些（尤其是在参数超过三个的时候）

    

### js创建对象的方式

1. new 操作符+Object 创建对象

2. 字面量方式创建对象
3. 工厂模式
4. 构造函数模式
5. 原型链模式