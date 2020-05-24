(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{348:function(s,a,e){"use strict";e.r(a);var n=e(3),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("ul",[e("li",[s._v("MongoDB 是一个基于分布式 文件存储的 NoSQL 数据库")]),s._v(" "),e("li",[s._v("由 C++语言编写，运行稳定，性能高")]),s._v(" "),e("li",[s._v("旨在为 WEB 应用提供可扩展的高性能数据存储解决方案")]),s._v(" "),e("li",[s._v("查看"),e("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),e("OutboundLink")],1)])]),s._v(" "),e("h4",{attrs:{id:"mongodb-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-特点"}},[s._v("#")]),s._v(" MongoDB 特点")]),s._v(" "),e("ul",[e("li",[s._v("模式自由 :可以把不同结构的文档存储在同一个数据库里")]),s._v(" "),e("li",[s._v("面向集合的存储：适合存储 JSON 风格文件的形式")]),s._v(" "),e("li",[s._v("完整的索引支持：对任何属性可索引")]),s._v(" "),e("li",[s._v("复制和高可用性：支持服务器之间的数据复制，支持主-从模式及服务器之间的相互复制。复制的主要目的是提供冗余及自动故障转移")]),s._v(" "),e("li",[s._v("自动分片：支持云级别的伸缩性：自动分片功能支持水平的数据库集群，可动态添加额外的机器")]),s._v(" "),e("li",[s._v("丰富的查询：支持丰富的查询表达方式，查询指令使用 JSON 形式的标记，可轻易查询文档中的内嵌的对象及数组")]),s._v(" "),e("li",[s._v("快速就地更新：查询优化器会分析查询表达式，并生成一个高效的查询计划")]),s._v(" "),e("li",[s._v("高效的传统存储方式：支持二进制数据及大型对象（如照片或图片）")])]),s._v(" "),e("h4",{attrs:{id:"packages-包说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#packages-包说明"}},[s._v("#")]),s._v(" Packages 包说明")]),s._v(" "),e("p",[s._v("MongoDB 官方源中包含以下几个依赖包：\nmongodb-org: MongoDB 元数据包，安装时自动安装下面四个组件包：\n1.mongodb-org-server: 包含 MongoDB 守护进程和相关的配置和初始化脚本。\n2.mongodb-org-mongos: 包含 mongos 的守护进程。\n3.mongodb-org-shell: 包含 mongo shell。\n4.mongodb-org-tools: 包含 MongoDB 的工具： mongoimport, bsondump, mongodump, mongoexport, mongofiles, mongooplog, mongoperf, mongorestore, mongostat, and mongotop。")]),s._v(" "),e("h2",{attrs:{id:"安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" "),e("strong",[s._v("安装步骤")])]),s._v(" "),e("h4",{attrs:{id:"_1-配置-mongodb-的-yum-源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-mongodb-的-yum-源"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1.配置 MongoDB 的 yum 源")])]),s._v(" "),e("p",[s._v("["),e("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](<javascript:void(0);>)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /etc/yum.repos.d/mongodb-org-3.4.repo\n#添加以下内容：\n[mongodb-org-3.4]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/3.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc\n\n#这里可以修改 gpgcheck=0, 省去gpg验证\n[root@localhost ~]# yum makecache\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("["),e("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](<javascript:void(0);>)")]),s._v(" "),e("h4",{attrs:{id:"_2-安装-mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-mongodb"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2.安装 MongoDB")])]),s._v(" "),e("p",[e("strong",[s._v("安装命令：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y install mongodb-org\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装完成后")]),s._v(" "),e("p",[s._v("["),e("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](<javascript:void(0);>)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("已安装:\n  mongodb-org.x86_64 0:3.4.14-1.el7\n\n作为依赖被安装:\n  mongodb-org-mongos.x86_64 0:3.4.14-1.el7          mongodb-org-server.x86_64 0:3.4.14-1.el7\n  mongodb-org-shell.x86_64 0:3.4.14-1.el7           mongodb-org-tools.x86_64 0:3.4.14-1.el7\n\n完毕！\n[root@adminset yum.repos.d]#\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("["),e("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),s._v("](<javascript:void(0);>)")]),s._v(" "),e("p",[e("strong",[s._v("查看 mongo 安装位置 :")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("whereis mongod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查看修改配置文件 ：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" vim /etc/mongod.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_3-启动-mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动-mongodb"}},[s._v("#")]),s._v(" "),e("strong",[s._v("3.启动 MongoDB")])]),s._v(" "),e("p",[e("strong",[s._v("启动 mongodb ：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start mongod.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("停止 mongodb ：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl stop mongod.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查到 mongodb 的状态：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl status mongod.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-外网访问需要关闭防火墙："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-外网访问需要关闭防火墙："}},[s._v("#")]),s._v(" "),e("strong",[s._v("4.外网访问需要关闭防火墙：")])]),s._v(" "),e("p",[e("strong",[s._v("关闭 firewall：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl stop firewalld.service #停止firewall\nsystemctl disable firewalld.service #禁止firewall开机启动\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_5-启动-mongo-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-mongo-shell"}},[s._v("#")]),s._v(" "),e("strong",[s._v("5.启动 Mongo shell")])]),s._v(" "),e("p",[e("strong",[s._v("命令：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mongo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看数据库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show dbs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_6-设置-mongodb-远程访问："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置-mongodb-远程访问："}},[s._v("#")]),s._v(" "),e("strong",[s._v("6.设置 mongodb 远程访问：")])]),s._v(" "),e("p",[s._v("编辑 mongod.conf 注释"),e("strong",[s._v("bindIp")]),s._v(",并重启 mongodb.(这句配置代表只能本机使用，所以需注释)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /etc/mongod.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重启 mongodb 使修改生效：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart mongod.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("到这里就可以正常使用 mongodb 了")])])])}),[],!1,null,null,null);a.default=t.exports}}]);