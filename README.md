# 简介
  分享此demo仅便于学习和解决项目开发上的问题，demo只使用了VUE框架。项目统一使用最外层`pagekage.json`安装插件来实现项目**一致性**，遇到特定第三方插件单独在项目`pagekage.json`配置。如下解决一些问题

- 多应用间公用组件开发
- 相同VUE配置环境开发环境
- 切换应用后不需要重新加载应用

----

## 安装

```shell
$ npm install
$ npm run projects:install
$ npm run projects:start
```

## 目录说明

    root/
      common/
        components/    公用组件
        layouts/
      projects/
        main/          基座 -- qiankun
        vue-one/       子应用1
        vue-two/       子应用2
      package.json

## 其他
欢迎到钉钉群参与讨论
![alt 钉钉二群](https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*AdpES5z40LcAAAAAAAAAAABkARQnAQ)
