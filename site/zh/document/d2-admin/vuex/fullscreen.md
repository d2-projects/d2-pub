# fullscreen

## state.active

当前的全屏状态激活标识

## actions.listen

### 介绍

初始化监听。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/fullscreen/listen')
```

## actions.toggle

### 介绍

切换全屏。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/fullscreen/toggle')
```

## mutations.set

### 介绍

设置全屏状态。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

### 示例

``` js
// 打开全屏
this.$store.commit('d2admin/fullscreen/set', true)
// 关闭全屏
this.$store.commit('d2admin/fullscreen/set', false)
```