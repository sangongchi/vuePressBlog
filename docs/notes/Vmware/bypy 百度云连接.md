---
title: 安装使用bypy连接同步百度云
date: 2018-09
tags:
  - bypy
categories:
  - centos7
---

重新安装 pip

> - 第一种方法： sudo apt install python-pip
> - 第二种方法：
>
>   - wget https://bootstrap.pypa.io/get-pip.py #科学上网
>   - python get-pip.py
>
> - 版本升级使用下面的命令
>
>   ```bash
>   pip install --upgrade setuptools && python -m pip install --upgrade pip
>   ```

安装配置好 pip 后安装

```
pip install requests
pip install bypy
```
