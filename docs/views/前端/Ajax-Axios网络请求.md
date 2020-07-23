---
title: Ajax请求封装
date: 2020-07-23
sidebar: autoS
tags:
  - Ajax
categories:
  - 前端
---



### Ajax浏览器使用封装

```js
let options = {
  url: url,
  method: 'post',
  data: data,
};
//定义一个 options 对象，进行参数的放置
function ajax(options) {
  let xhr = null;
  if (window.XMLHttpRequest) {   //做浏览器的兼容性处理
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        alert('您的浏览器不支持 Ajax！');
      }
    }
  }
  xhr.onerror = function (e) {
    console.log(e);
  };
  xhr.open(options.method, options.url);
  xhr.onreadystatechange = () => {
    if (xhr.readystate == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        console.log(xhr.responseText);
      } else {
        console.log('请求数据失败' + xhr.status);
      }
    }
  };
  xhr.send(options.data);
}

```



### Ajax文件上传

```js
let input = document.getElementById('input-file');
let formData = new FormData();
//使用 FormData对象包裹选中的文件
formData.append('file', input.files[0]);

options = {
  url: 'url',
  method: 'post',
  data: formData,
};
let xhr = ajax(options);
xhr.upload.onprogress = function (e) {
  console.log((e.loaded / e.total) * 100 + '%');  //上传进度
};
xhr.upload.onload = function () {
  console.log('upload onload .');
};
xhr.onload = function () {
  console.log('onload');
};

```

## Fetch

`fetch` 是基于 `Promis` 设计的,不支持 `Promise` 的将使用`polyfill`

```js
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```







---

*参考链接*:<https://juejin.im/post/5a20b1f1f265da432529179c>

<https://juejin.im/post/5acde23c5188255cb32e7e76>

<https://juejin.im/post/58c883ecb123db005311861a#heading-47>