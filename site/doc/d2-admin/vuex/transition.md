# transition

## state.active

是否开启页面过度动画

## actions.set

### 介绍

设置页面动画开启状态。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

### 返回

promise

### 示例

``` js
// 打开页面动画
this.$store.dispatch('d2admin/transition/set', true)
// 关闭页面动画
this.$store.dispatch('d2admin/transition/set', false)
```

## actions.load

### 介绍

从持久化数据读取页面过渡动画设置。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/transition/load')
```