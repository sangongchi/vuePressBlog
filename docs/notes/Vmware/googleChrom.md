---
title: 虚拟机中安装谷歌浏览器
date: 2018-09
tags:
  - centos7
categories:
  - 虚拟机
---

> //跳转至 yum 源，添加 google-chrome 到源
> cd etc/yum.repos.d
>
> //编辑添加源
> vim google-chrome.repo
>
> //添加如下内容
>
> ```bash
> [google-chrome]
>
> name=google-chrome
>
> baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
>
> enabled=1
>
> gpgcheck=1
>
> gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
> ```
>
> //之后运行：
>
> ```bash
> yum -y install google-chrome-stable --nogpgcheck
> ```
