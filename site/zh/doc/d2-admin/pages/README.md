# 多页面

D2Admin 默认支持多页面，并且支持多页面控制器上的 tab 标签页右键菜单控制，可以实现“关闭全部”，“关闭其它”，“关闭左侧”，“关闭右侧”的功能。

## 注册页面

D2Admin 的多页面设置源头在 `d2-admin/src/router/routes.js`，该文件导出了一个 `frameInRoutes` 变量，`d2-admin/src/main.js` 中使用下面的方式导入：

``` js
import { frameInRoutes } from '@/router/routes'
```

然后在根实例中加入了一个名为 `getAllPageFromRoutes` 的方法，该方法在 `created` 生命周期调用，递归处理 `frameInRoutes` 中的数据将支持多标签页显示所有页面数据扁平为一位数组，然后使用：

``` js
$store.commit('d2admin/page/poolSet', pool)
```
将得到的路由数据存储到 vuex 中备用。这份数据在操作多页面数据时会使用到。

## 触发

新建页面的触发在 `d2-admin/src/router/index.js` 中的 `router.afterEach` 钩子中。涉及的方法参见 [API](/zh/sys-vuex/page.md)

## 标签页控制

标签页组件在 `d2-admin/src/layout/header-aside/components/tabs/index.vue`，该组件实现多页面的各种关闭控制。涉及的方法参见 [API](/zh/sys-vuex/page.md)

## 页面缓存

[页面打开缓存的效果](https://d2.pub/d2-admin/preview/#/demo/playground/page-cache/on) | [页面关闭缓存的效果](https://d2.pub/d2-admin/preview/#/demo/playground/page-cache/off)

要实现页面缓存需要同时满足以下两个条件：

1. 页面组件需要有 name 属性并且 name 属性的值要与当前页面在路由信息中的 name 字段一致。
2. 页面路由设置中要指定 `meta: { cache: true }`

下面是两段示例代码，请注意高亮行。

页面组件：

``` vue {9}
<template>
  <d2-container>
    我会被缓存
  </d2-container>
</template>

<script>
export default {
  name: 'foo-page'
}
</script>
```

该页面组件在路由中的数据：

``` js {3,6}
{
  path: '/foo/page',
  name: 'foo-page',
  meta: {
    title: '这是一个会被缓存的页面',
    cache: true
  },
  component: () => import('page/foo/page.vue')
}
```