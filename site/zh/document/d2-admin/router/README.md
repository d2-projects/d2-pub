# 路由

## 数据

完整版的 D2Admin 路由设置文件在 `d2-admin/src/router/routes.js`。

需要注意的是大多数路由设置要写在 frameIn 下。frameIn 中的页面会在嵌套在一个包含顶栏和侧边栏的页面布局中显示。

## 路由配置

路由注册和钩子设置文件为 `d2-admin/src/router/index.js`，此文件中将 `routes.js` 中导出的 routes 变量注册到路由，并且设置后续的路由拦截和登录状态判断，多页面的新建页面事件触发也来自这里。该文件再导出注册了所有页面的路由实例，在 `main.js` 中注册到 vue 根实例。

## 路由缓存

开启缓存的页面可以在切换后保留页面数据。效果预览：

* [开启缓存](https://fairyever.com/d2-admin/preview/#/demo/playground/page-cache/on)
* [带参路由缓存1](https://fairyever.com/d2-admin/preview/#/demo/playground/page-cache/params/1) | [带参路由缓存2](https://fairyever.com/d2-admin/preview/#/demo/playground/page-cache/params/2)

路由缓存默认为关闭状态，如果想启用某个页面的缓存，请在该路由配置的 meta 中加入：

``` js {2}
meta: {
  cache: true
}
```

最后结果类似这样：

``` js {7}
{
	path: '/page-cache/on',
	name: 'page-cache-on',
	component: () => import('xxx.vue'),
	meta: {
		auth: true,
		cache: true,
		title: '开启缓存'
	}
}
```

路由配置上开启缓存之后，还需要遵守一个约定才可以正确缓存页面：

**页面组件必须有 name 字段，并且字段的值和该路由的 name 字段一致。请注意下面的高亮行。**

例如：

* 页面文件：

``` vue {9}
<template>
  <d2-container>
    Hello World
  </d2-container>
</template>

<script>
export default {
  name: 'page-cache-on'
}
</script>
```

* 路由设置：

``` js {3}
{
	path: '/page-cache/on',
	name: 'page-cache-on',
	component: () => import('xxx.vue'),
	meta: {
		auth: true,
		cache: true,
		title: '开启缓存'
	}
}
```
