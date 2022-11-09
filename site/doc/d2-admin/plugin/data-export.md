# 表格导出

本框架集成了数据导出功能，并包装成插件

## 安装

``` sh
npm i @d2-projects/vue-table-export --save
```

## 安装插件

``` js
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'
Vue.use(pluginExport)
```

之后就可以在组件中使用 `this.$export` 来调用导出功能

## 导出 csv

此方法将数据以 `csv` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.csv({
  columns,
  data
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| columns | 列 | 非 | Array |  | 空数组 |
| data | 行数据 | 非 | Array |  | 空数组 |
| title | 文件名 | 非 | String |  | table |
| noHeader | 不导出表头 | 非 | Boolean |  | false |
| separator | 数据分隔符 | 非 | String |  | , |
| quoted | 每项数据是否加引号 | 非 | Boolean |  | false |

示例

``` js
const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]
const data = [
  {
    name: 'lucy',
    age: 24
  },
  {
    name: 'bob',
    age: 26
  }
]
this.$export.csv({
  columns,
  data
})
```

## 导出 xlsx

此方法将数据以 `xlsx` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.excel({
  columns,
  data
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| columns | 列 | 非 | Array |  | 空数组 |
| data | 行数据 | 非 | Array |  | 空数组 |
| title | 文件名 | 非 | String |  | table |
| header | 第一行文字 | 非 | String |  | null |
| merges | 要合并的单元格 | 非 | Array |  | 空数组 |

合并单元格，根据 Excel 的表达方式，从第一行第一个单元格，到第一行第三个单元格：`merges: ['A1', 'A3']`，
多个合并区域，用二维数组表示：`merges: [['A1', 'B1'], ['A2', B2]]`，单元格从A1到B1、从A2到B2，分别进行合并。

示例

``` js
const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]
const data = [
  {
    name: 'lucy',
    age: 24
  },
  {
    name: 'bob',
    age: 26
  }
]
this.$export.excel({
  columns,
  data,
  header: 'Excel 第一行标题',
  merges: ['A1', 'A2']
})
```

## 导出 txt

此方法将数据以 `txt` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.txt({
  text: '文本内容',
  title: '文件名'
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| text | 文件内容 | 非 | String |  | 空 |
| title | 文件名 | 非 | String |  | 文本 |

::: tip 源代码
[d2-projects/vue-table-export](https://github.com/d2-projects/vue-table-export)
:::