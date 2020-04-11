---
title: Vue引入样式文件的几种方式
date: 2018-09-09
tag:
  - vue
categories:
  - Vue
---

### 1. 引入样式文件的三种方式

1、在入口 js 文件 main.js 中引入，一些公共的样式文件，可以在这里引入。

> ```js
> import Vue from 'vue';
> import App from './App'; // 引入App这个组件
> import router from './router'; /* 引入路由配置 */
> import axios from 'axios';
> import '../static/css/global.css'; /*引入公共样式*/
> ```

2、在 index.html 中引入

> ```html
> <!DOCTYPE html>
> <html>
>   <head>
>     <meta charset="utf-8" />
>     <title>stop</title>
>     <link rel="stylesheet" href="./static/css/global.css" />
>     /*引入公共样式*/
>   </head>
>   <body>
>     <div id="app"></div>
>     <!-- built files will be auto injected -->
>   </body>
> </html>
> ```

3、在 app.vue 中引入，但是这样引入有一个问题，就是在 index.html 的 HEADH 上会多出一个空的<style></style>

> ```vue
> <template>
>   <div id="app">
>     <router-view />
>   </div>
> </template>
> <script>
> export default {
>   name: 'app'
> };
> </script>
>
> <style>
> @import './../static/css/global.css'; /*引入公共样式*/
> </style>
> ```

### 2.引入 js 文件

> 1. 需要在 index.html 文件中引入

#### 3.引入 jquery 文件

> 1. 编辑 ==vue.config.js==
>
>    ```js
>    const webpack = require('webpack');
>    module.exports = {
>      configureWebpack: {
>        plugins: [
>          new webpack.ProvidePlugin({
>            $: 'jquery',
>            jQuery: 'jquery',
>            'windows.jQuery': 'jquery'
>          })
>        ]
>      }
>    };
>    ```
>
> 2. 同时在 package.json 中修改
>
>    ```json
>    "eslintConfig": {
>        "root": true,
>        "env": {
>          "node": true,
>          "jquery": true    //添加这句话
>        },
>        "extends": [
>          "plugin:vue/essential",
>          "eslint:recommended"
>        ],
>        "rules": {
>          "no-unused-vars": 0
>        },
>        "parserOptions": {
>          "parser": "babel-eslint"
>        }
>      },
>    ```

#### 4. 解决变量声明但未使用的报错

> 1. 在 package.json 中修改
>
>    ```json
>    "eslintConfig": {
>        "root": true,
>        "env": {
>          "node": true,
>          "jquery": true    //添加这句话
>        },
>        "extends": [
>          "plugin:vue/essential",
>          "eslint:recommended"
>        ],
>        "rules": {
>          "no-unused-vars": 0    //规则改为0
>        },
>        "parserOptions": {
>          "parser": "babel-eslint"
>        }
>      },
>    ```
