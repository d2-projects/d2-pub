# 表格导入

本框架集成了数据导入功能，并包装成插件

## 安装

``` sh
npm i @d2-projects/vue-table-import --save
```

## 导入

``` js
import Vue from 'vue'
import pluginImport from '@d2-projects/vue-table-import'
Vue.use(pluginImport)
```

之后就可以在组件中使用 `this.$import` 来调用导出功能

## 导入 csv

导入csv文件，并且返回一个 `Promise` 对象

``` js
// 在选择文件后调用
handleUpload (file) {
  this.$import.csv(file)
    .then(res => {
      this.table.columns = Object.keys(res.data[0]).map(e => ({
        label: e,
        prop: e
      }))
      this.table.data = res.data
    })
  // 阻止默认的上传
  return false
}
```

## 导入 xlsx

导入xlsx文件，并且返回一个 `Promise` 对象

**注意 导入的表格文件第一行应为表头**

参考下述示例使用

``` js
// 在选择文件后调用
handleUpload (file) {
  this.$import.xlsx(file)
    .then(({header, results}) => {
      // header 为表头
      // results 为内容
      this.table.columns = header.map(e => {
        return {
          label: e,
          prop: e
        }
      })
      this.table.data = results
    })
  // 阻止默认的上传
  return false
}
```

::: tip 源代码
[d2-projects/vue-table-import](https://github.com/d2-projects/vue-table-import)
:::