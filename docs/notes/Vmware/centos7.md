---
title: 防火墙的相关操作
date: 2018-09-05
tags:
  - network
categories:
  - centos7
---

> 1. 关闭防火墙
>
>    - `systemctl stop firewalld.service #停止firewall`
>    - `systemctl disable firewalld.service #禁止firewall开机启动`
>
> 2. 开启防火墙
>
>    - `firewall-cmd --reload` # 重启防火墙
>    - `systemctl restart iptables.service` #重启防火墙使配置生效
>    - `systemctl enable iptables.service` #设置防火墙开机启动
>
> 3. 其他常用命令
>
>    - > 命令含义:
>      >
>      > --zone #作用域
>      > --add-port=80/tcp #添加端口，格式为：端口/通讯协议
>      > --permanent #永久生效，没有此参数重启后失效
>
>    - `firewall-cmd --state` ##查看防火墙状态，是否是 running
>    - `firewall-cmd --reload` ##重新载入配置，比如添加规则之后，需要执行此命令
>    - `firewall-cmd --get-zones` ##列出支持的 zone
>    - `firewall-cmd --get-services` ##列出支持的服务，在列表中的服务是放行的
>    - `firewall-cmd --query-service ftp` ##查看 ftp 服务是否支持，返回 yes 或者 no
>    - `firewall-cmd --add-service=ftp` ##临时开放 ftp 服务
>    - `firewall-cmd --add-service=ftp --permanent` ##永久开放 ftp 服务
>    - `firewall-cmd --remove-service=ftp --permanent` ##永久移除 ftp 服务
>    - `firewall-cmd --add-port=80/tcp --permanent` ##永久添加 80 端口
