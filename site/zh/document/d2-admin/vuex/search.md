# search

## state.active

搜索面板激活状态

## state.hotkey

快捷键设置

## state.pool

所有可以搜索的页面

## mutations.toggle

### 介绍

切换激活状态。

### 参数

无

### 示例

``` js
// 切换搜索面板的激活状态
this.$store.commit('d2admin/search/toggle')
```

## mutations.set

### 介绍

设置搜索面板的激活状态。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

### 示例

``` js
// 打开搜索面板
this.$store.commit('d2admin/search/set', true)
// 关闭搜索面板
this.$store.commit('d2admin/search/set', false)
```

## mutations.init

### 介绍

初始化。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 候选菜单 | 必选 | Array |  |  |

### 示例

``` js
this.$store.commit('d2admin/search/init', menu)
```

menu 的数据类型和菜单的数据类型一致 [menu 数据格式](#menu-数据格式)