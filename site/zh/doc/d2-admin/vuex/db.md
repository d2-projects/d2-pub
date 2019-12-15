# db

## actions.set

### 介绍

将数据存储到指定位置 | 路径不存在会自动初始化。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 持久化数据分区名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| value | 需要存储的值 | 非 | String |  | 空字符串 |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

``` js
this.$store.dispatch('d2admin/db/set', {
  dbName: 'database',
  path: 'demo.sometext',
  value: 'Hello World'
})
```

## actions.get

### 介绍

效果类似于取值 dbName.path || defaultValue。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 持久化数据分区名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| defaultValue | 取值失败的默认值 | 非 | String |  | 空字符串 |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

``` js
const value = await this.$store.dispatch('d2admin/db/get', {
  dbName: 'database',
  path: 'demo.sometext',
  defaultValue: 'Hello World'
})
```

## actions.database

### 介绍

获取持久化数据对象。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/database')
db
  .set('keyName', 'value')
  .write()
```

区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

## actions.databaseClear

### 介绍

清空持久化数据对象。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databaseClear')
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databaseClear', {
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/databaseClear')
db
  .set('keyName', 'value')
  .write()
```

## actions.databasePage

### 介绍

获取持久化数据对象 [ 区分页面 ]。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | fullPath |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage')
db
  .set('keyName', 'value')
  .write()
```

区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

## actions.databasePageClear

### 介绍

清空持久化数据对象 [ 区分页面 ]。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | fullPath |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databasePageClear')
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databasePageClear', {
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePageClear')
db
  .set('keyName', 'value')
  .write()
```

## actions.pageSet

### 介绍

快速将页面当前的数据 ( $data ) 持久化。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| instance | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | fullPath |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户存储：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  instance: this
})
```

区分用户存储：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  instance: this,
  user: true
})
```

## actions.pageGet

### 介绍

快速获取页面快速持久化的数据。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| instance | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | fullPath |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户获取：

``` js
// 获取数据
const data = await this.$store.dispatch('d2admin/db/pageGet', {
  instance: this
})
// 将数据还原到页面
for (const key in data) {
  if (data.hasOwnProperty(key)) this[key] = data[key]
}
```

区分用户获取：

``` js
// 获取数据
const data = await this.$store.dispatch('d2admin/db/pageGet', {
  instance: this,
  user: true
})
// 将数据还原到页面
for (const key in data) {
  if (data.hasOwnProperty(key)) this[key] = data[key]
}
```

## actions.pageClear

### 介绍

清空页面快照。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | fullPath |
| user | 是否区分用户 | 非 | Boolean |  | false |

### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/pageClear')
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/pageClear', {
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/pageClear')
db
  .set('keyName', 'value')
  .write()
```