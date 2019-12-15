# gray

::: tip
灰度模式：页面失去色彩，默认在注销确认时会使用到。
:::

## state.active

当前的灰度状态激活标识

## mutations.toggle

### 介绍

切换灰度模式。

### 参数

无

### 示例

``` js
this.$store.commit('d2admin/gray/toggle')
```

## mutations.set

### 介绍

设置灰度模式。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

### 示例

``` js
// 打开灰度模式
this.$store.commit('d2admin/gray/set', true)
// 关闭灰度模式
this.$store.commit('d2admin/gray/set', false)
```