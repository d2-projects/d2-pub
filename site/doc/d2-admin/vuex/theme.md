# theme

## state.list

所有注册的主题

## state.activeName

当前激活的主题名称

## getters.activeSetting

### 介绍

返回当前的主题信息，不是一个名字，而是当前激活主题的所有数据。

### 参数

无

### 示例

``` js
this.$store.getters['d2admin/theme/activeSetting']
```

## actions.set

### 介绍

激活一个主题。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| themeName | 需要激活的主题名称 | 必选 | String |  |  |

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/theme/set', 'd2')
```

## actions.load

### 介绍

从持久化数据加载主题设置。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/theme/load')
```

## mutations.dom

### 介绍

将 vuex 中的主题应用到 dom。

### 参数

无

### 示例

``` js
this.$store.commit('d2admin/theme/dom')
```