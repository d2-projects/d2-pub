# account

account 负责实现用户的登录和注销逻辑。

## actions.login

### 介绍

用户登录，通常情况下您需要适当修改这个方法来适配您的特殊需要。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| username | 账号 | 必选 | String |  | 空字符串 |
| password | 密码 | 必选 | String |  | 空字符串 |

### 示例

``` js
this.$store.dispatch('d2admin/account/login', {
  username: 'admin',
  password: 'my-password'
})
```

登陆后跳转到指定的页面

``` js
this.$store.dispatch('d2admin/account/login', {
  username: 'admin',
  password: 'my-password'
})
  .then(() => {
    this.$router.replace('/foo/path')
  })
```

## actions.logout

### 介绍

用户注销，通常情况下您需要适当修改这个方法来适配您的特殊需要。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| confirm | 注销确认 | 非 | Boolean |  | false |

### 示例

``` js
this.$store.dispatch('d2admin/account/logout', {
  confirm: true
})
```

## actions.load

### 介绍

用户登录后从持久化数据加载一系列的设置，例如：

* 用户名
* 主题
* 页面过渡效果设置
* 上次退出时的多页列表
* 侧边栏折叠状态

如果你扩展了系统功能并且涉及到设置项的数据持久化，不要忘了更新这里。

### 参数

无

### 示例

``` js
this.$store.dispatch('d2admin/account/load')
```