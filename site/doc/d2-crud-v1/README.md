# 起步

## 介绍
`D2-Crud`是一套基于 [Vue.js 2.2.0+](https://cn.vuejs.org/)和[Element 2.0.0+](http://element-cn.eleme.io/#/zh-CN) 的表格组件，`D2-Crud`将 `Element` 的功能进行了封装，并增加了表格的增删改查、数据校验、表格内编辑等常用的功能。大部分功能可根据配置的json实现，大大简化了开发流程。

::: tip 新版文档
[d2-crud v2.x](/zh/doc/d2-crud-v2)
:::

## 功能
- 继承了 Element 中表格所有功能
- 新增表格数据
- 修改表格数据
- 删除表格数据
- 使用 Element 中的组件渲染表格内容和表单内容
- 表单校验
- 表格内编辑
- 渲染自定义组件

## 安装
使用npm
``` bash
npm i element-ui @d2-projects/d2-crud -S
```

使用yarn
``` bash
yarn add element-ui @d2-projects/d2-crud
```

## 使用
在`main.js`中写入以下内容：
``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import D2Crud from '@d2-projects/d2-crud'

Vue.use(ElementUI)
Vue.use(D2Crud)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

之后就可以在项目中使用`D2-Crud`了。

## 文档
[使用指南](./guide.md)

[API](./crud.md)

[示例](./example.md)
