# 日志

使用 `this.$log.push(String | Object)` 可以快速记录日志

::: tip
这实质上是在调用 vuex 中的 log 模块。
``` js
this.$log.push({
  message: 'foo text'
})
// 或
this.$log.push('foo text')
// 等效于：
this.$store.dispatch('d2admin/log/push', {
  message: 'foo text'
})
```
此举仅仅是为了方便使用和减少代码数量。
:::

## 使用方式

``` js
this.$log.push({
  message: 'foo text'
})
```

简化写法：

``` js
this.$log.push('foo text')
```

## 指定日志类型

``` js
this.$log.push({
  message: 'foo text',
  type: 'danger'
})
```

## 附加额外信息

``` js
this.$log.push({
  message: 'foo text',
  type: 'danger',
  meta: {
    fooInfo: 'fooInfo'
  }
})
```

完整的参数设置见：[vuex log | actions.push](../vuex/log.html#actions-push)