# size

## state.value

全局尺寸

## actions.isLoaded

### 介绍

确认已经加载组件尺寸设置。

### 参数

无

### 返回

promise

### 示例

``` js
(async function () {
  // 这里不一定已经加载组件尺寸设置
  await this.$store.dispatch('d2admin/size/isLoaded')
  // 在这里确保已经加载组件尺寸设置
})()
```

使用情景参考 [commit](https://github.com/d2-projects/d2-admin/commit/606575dbb10f6194e69b2291bdfe221240e64ab7#diff-36727cbb21483337586ca81cb95f29b4)

## actions.set

### 介绍

设置全局尺寸。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| size | 尺寸 | 必选 | String |  |  |

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/size/set', 'mini')
```

## actions.load

### 介绍

从持久化数据读取尺寸设置。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/size/load')
```