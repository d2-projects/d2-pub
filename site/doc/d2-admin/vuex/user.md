# user

## state.info

用户信息

## actions.set

### 介绍

设置用户数据。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| info | 用户数据 | 必选 | Object |  |  |

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/user/set', {
  name: 'your name'
})
```

## actions.load

### 介绍

从持久化数据读取用户数据。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/user/load')
```