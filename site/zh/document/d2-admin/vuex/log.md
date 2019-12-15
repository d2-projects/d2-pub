# log

## state.log

当前的日志记录

## getters.length

### 介绍

返回现存 log (all) 的条数。

### 参数

无

### 示例

``` js
this.$store.getters['d2admin/log/length']
```

## getters.lengthError

### 介绍

返回现存 log (error) 的条数。

### 参数

无

### 示例

``` js
this.$store.getters['d2admin/log/lengthError']
```

## actions.push

### 介绍

添加一个日志。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| message | 日志内容 | 必选 | String |  |  |
| type | 日志类型 | 非 | String | success, warning, info, danger | info |
| meta | 附加信息 | 非 | Object |  | 部分系统信息，传入的值会和默认值合并 |

### 示例

记录日志：

``` js
this.$store.dispatch('d2admin/log/push', {
  message: 'foo text'
})
```

记录错误：

``` js
import store from '@/store'
export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (error, instance, info) {
      Vue.nextTick(() => {
        store.dispatch('d2admin/log/push', {
          message: `${info}: ${error.message}`,
          type: 'danger',
          meta: {
            error,
            instance
          }
        })
      })
    }
  }
}
```

## mutations.push

### 介绍

增加日志。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| log | 日志 | 必选 | Object |  |  |

### 示例

``` js
this.$store.commit('d2admin/log/push', {
  message: 'foo text',
  type: 'info',
  meta: {
    user: 'admin',
    uuid: 'admin-uuid',
    token: 'admin-token',
    url: 'http://localhost:8080'
  }
})
```

::: tip
您应该使用 actions:push 而不是 mutations:push
:::

## mutations.clean

### 介绍

清空日志。

### 参数

无

### 示例

``` js
this.$store.commit('d2admin/log/clean')
```