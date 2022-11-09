# 常见问题

本章总结收到的用户反馈问题，集中展示，方便后续用户自助解决问题

## 如何新增一个主题

新增主题所需的图片文件

* `public/image/theme/your-theme-name/logo/all.png`
* `public/image/theme/your-theme-name/logo/icon-only.png`
* `public/image/theme/your-theme-name/preview@2x.png`

新增主题样式文件

* `src/assets/style/theme/your-theme-name/index.scss`
* `src/assets/style/theme/your-theme-name/setting.scss`

修改以下文件来注册新的主题

* `src/assets/style/theme/register.scss`
* `src/setting.js`

示例请参考本次提交：[e3fd543](https://github.com/d2-projects/d2-admin/commit/e3fd543573d42f2f06c0214d34dea6263f8c3294)

## 代码下载慢

建议使用 [Free Download Manager](http://www.freedownloadmanager.org/download.htm) 下载，速度会有显著提升

![](https://cdn.d2.pub/files/image-hosting/20180722210734.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 无法启动项目

如果在 `run dev` 或者 `npm i` 的过程中报错，首先建议您升级 node 版本 > 8，在以下环境测试可用

``` {10}
➜  ~ npm -v
5.6.0
➜  ~ node -v
v8.11.1
➜  ~ nrm -V
1.0.2
➜  ~ nrm ls
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

::: tip
推荐使用 [nrm](https://github.com/Pana/nrm) 管理 npm 源，不建议使用 cnpm
:::

## 没有自动打开浏览器

如果您运行

``` bash
npm run serve
npm run start
npm run dev
```

其中任何一个，编译完成后没有自动打开浏览器，请尝试在本机安装 [vue-cli3](https://cli.vuejs.org../) 后重新启动项目。

## 热更新失效

如果使用了 cnpm，cnpm 使用 symlink，导致 webpack 打包的时候抒符号链接的包打包了两份，由于webpack/hot/emitter.js 为两个不同实例，导致 webpack hot/server webpackHotUpdate 无法触发，热更新失效。解决方法：设置 registry，不使用 cnpm。

``` bash
npm config set registry https://registry.npm.taobao.org
npm install
```

如果上面的方法无效，尝试在 `vue.config.js` 中如下设置：

``` js
module.exports = {
  chainWebpack: config => {
    config.resolve
      .symlinks(true)
      return config
  }
}
```

如果不清楚怎么写可以参考新版 D2Admin 的配置。

> There is a resolve.symlinks in webpack configuration, and it's default value is true. Howerver, project created by vue-cli, the resolve.symlinks is set to false.

其它解决办法请参考 [vue-cli/issues/1559](https://github.com/vuejs/vue-cli/issues/1559)。

## node-sass 安装失败

由于某些不可描述的原因，利用 npm 进行安装模块的时候会发生包下载失败的情况，node-sass 尤其的频繁，或者说 node-sass 的二进制文件是接近百分百失败的，即使用 yarn 安装也依旧在这个点失败，给出以下建议

**方法1**

首先，需要提前下载 node-sass 的二进制文件，这个文件可以去 cnpm 仓库下载或者 node-sass 的 github 上去下载，在下载之前我们需要先查看电脑的系统的版本，来确定适合哪个版本的二进制文件，查看版本的指令如下：

```
node -p "[process.platform, process.arch, process.versions.modules].join('-')"
```

输入这个指令后会弹出一个系统版本，然后在下面两个地址中选择一个去下载对应系统版本的后缀为 .node 的 node-sass 文件

[cnpm https://npm.taobao.org/mirrors/node-sass/](https://npm.taobao.org/mirrors/node-sass/)

[github https://github.com/sass/node-sass/releases](https://github.com/sass/node-sass/releases)

下载完保存到任意位置，最好放置到 package.json 所在位置。然后我们需要手动指定 node-sass 二进制文件的下载源为下载的那个文件，以下是npm与yarn的指令：

npm

```
npm config set sass-binary-path 你存放刚才下载的二进制文件的目录
// 例如 npm config set sass-binary-path e:/web/win32-x64-48_binding.node
```

yarn

```
yarn config set sass-binary-path 你存放刚才下载的二进制文件的目录
// 例如 yarn config set sass-binary-path e:/web/win32-x64-48_binding.node
```

然后我们即可用正常指令下载了

::: tip 注意
此方法会绑定为本地文件，即无法更新 node-sass 了。如果不希望这样，请使用第二种方法
:::

**方法2**

此方案将把下载源指定为cnpm仓库，更建议使用这种方法

全部的下载源指向cnpm的指令

npm

```
npm config set registry http://registry.npm.taobao.org
```

yarn

```
yarn config set registry http://registry.npm.taobao.org
```

只指定node-sass的下载源（建议使用）

npm

```
npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

yarn

```
yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

## 关闭 ESLint 👎

由于使用者技术水平参差不齐，有些开发者希望在开发时关闭 ESLint，虽然我不建议这样做，在这里也给出以下方法，或者你也可以在下面的链接里找到答案

[ESLint 中文](http://eslint.cn/) | [ESLint 英文](https://eslint.org/)

* 方法 1

在根目录的 `.eslintignore` 中添加 `*.vue`，就会忽略所有 vue 文件后缀的检查，js 文件同理。修改后重启本地服务。

* 方法 2

在根目录中的 `.eslintrc.js` 找到 `'@vue/standard'` 并注释掉，修改后重启本地服务。

## 修改 ESLint 规则

在根目录中的 `.eslintrc.js` 配置规则

**语法**

``` js
rules: {
  "规则名": [规则值, 规则配置]
}
```

**规则值**

``` js
"off" 或者 0 //关闭规则关闭
"warn" 或者 1 //在打开的规则作为警告（不影响退出代码）
"error" 或者 2 //把规则作为一个错误（退出代码触发时为1）
```

* [规则列表 中文](http://eslint.cn/docs/rules/)
* [规则列表 英文](https://eslint.org/docs/rules/)

## 侧边栏等部分无法点击

如果您打开了 Chrome 的开发者工具并且模拟了非 PC 设备（或者您真的是在 ipad 上访问的项目），在 [1.6.11](https://github.com/d2-projects/d2-admin/releases/tag/1.6.11) 版本之前，侧边栏和优化滚动模式的 `d2-container` 组件将会无法点击。请按照 [0c8d38d](https://github.com/d2-projects/d2-admin/commit/0c8d38d7b690ee6221d491ef0aea0f943f3cb131) 修改您的代码。

> 造成这个问题的原因是 better-scroll 插件会默认禁止 click 事件。  
> 参见 [《better-scroll 文档 | options.click》](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#click)

## 无法跳转路由

有可能你在 D2Admin 的基础上进行你的开发时，发现在登录页面进行

``` js
this.$router.push({ name: 'index' })
```

跳转的时候页面并没有跳转，这是因为你很有可能没有进行下面的操作：

``` js
Cookies.set('token', res.token, setting)
```

原因根源是在 `src/router/index.js` 中有如下一段代码，根据 `token` 判断用户是否登录

``` js {3-9}
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.auth)) {
    if (Cookies.get('token')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})
```

所以如果你没有存 token 字段在 cookie 中，路由鉴权机制将会重定向到登录页

如果你想修改基于 token 验证用户登录状态的机制，请在 `./src` 下搜索 `token` 关键字并修改他们，但是我**十分不建议你修改它们**

最好的做法是在登录后返回本次登录的 token 并且存储在 cookie 中，然后在每次 ajax 请求时都携带这个 token 给后端做权限验证（必要的话你可以还可以增加 token 的更新机制）

::: tip 同样需要注意的地方
除了需要在 cookie 中保存 token，你还要保存 uuid 字段，意为“用户唯一标识”

``` js
Cookies.set('uuid', res.uuid, setting)
```

D2Admin 会在很多地方使用 cookie 中的此字段区分用户，比如不同用户选择的不同主题的数据持久化，还有不同用户打开的多标签页数据的持久化存储。
:::

## 删除页面右上角 github 链接

在 `src/components/demo/d2-demo-page-cover/index.vue` 中删除相关代码即可

## 兼容性

首先 vue.js 和 ElementUI 做不到兼容的，D2Admin 肯定也兼容不了，实测在 macOS 下 Chrome 和新版本的火狐浏览器以及 Safari 都正常使用，这类管理系统一般是内部使用，通常不必太纠结兼容低版本浏览器，如果你发现了显示的 bug，可以加 QQ 群反馈，如果你可以修复这个 bug 使其在你的浏览器上显示正常，欢迎你的 pr。

## 项目里有未完成的代码

有些示例（比如 v-charts 和 ElementUI）是很方便就可以找到官网示例和文档的，这些插件和组件的示例在本项目中就可能处于未完成的状态，但是以后会完成

## unexpected end of file

报错代码

```
E:\VS\TFS_FREE_Z\BaseProjects\VUE\d2-admin-z>npm i
npm WARN tar zlib error: unexpected end of file
npm ERR! cb() never called!
npm ERR! This is an error with npm itself. Please report this error at:
npm ERR!     <https://github.com/npm/npm/issues>
npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\ZHZ\AppData\Roaming\npm-cache\_logs\2018-07-27T13_13_56_693Z-debug.log
```

解决方法

目前只有一位开发者遇到这个问题，最后使用 cnpm 绕过了这个错误

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 打包后 CSS 文件位置出错

如果您发现打包后 CSS 文件出现在 dist 文件夹目录内，请检查 `d2-admin/vue.config.js` 中 `baseUrl` 的设置。

`baseUrl` 为项目部署的基础路径，应该以 '/' 开始并且以 '/' 结束

假设你的应用将会部署在域名的根部，比如 https://www.my-app.com/，那么 `baseUrl` 应该值为 '/'

如果你的应用时部署在一个子路径下，那么你需要在这里指定子路径。比如，如果你的应用部署在 https://www.foobar.com/my-app/，那么将这个值改为 `/my-app/`

## 打包后无法运行

打包后会生成 dist 文件夹，**请在本地开启一个 http 服务来运行打包后的项目**。

如果您不清楚如何操作，建议您使用 [browsersync](http://www.browsersync.cn/) 快速达到目的。

![](https://cdn.d2.pub/files/image-hosting/20180821144014.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 灰度模式下弹出框被遮住

如果您发现 [dialog](http://element.eleme.io/#/zh-CN/component/dialog) 在 D2Admin 灰度模式打开情况下被遮罩遮住，可以尝试在弹出框上添加 `:append-to-body="true"`，将 Dialog 自身是插入至 body 元素上。

## 如何更新版本

首先明确告诉大家，此项目无法通过 npm 升级，亦无法通过 cli 升级。

D2Admin 不是一个独立的库，不能像其它插件一样通过 npm 升级版本，不仅这个项目，其实所有的 vue 管理系统脚手架都一样，由于本质上这类项目是一个初始模板，开发者需要做的是下载这些代码，并且根据自身需要去修改它们，然后基于此再去添加自己的业务代码，遂一旦您将代码下载到本地并且发生了修改，您是很难再跟随我们升级的。

iview-admin 作者在一次线下活动中也回答了现场观众的类似问题：

> “这类项目一旦下载开始使用，基本是无法更新的。你在哪个时间点开始使用，这个项目就固定在什么版本了。”

那么可能您 follow 了我，或者 watch 了这个项目，看到我们经常更新代码，发布新的版本，也希望跟随一起更新，那怎么办呢？真的没有办法吗？

有以下两种可行方案：

1. 请您在基于 D2Admin 开发时尽量避免太多的自带模块或者组件改动，这样您可以在发现新版本时下载新的脚手架，并且较方便地将您的业务代码逐步迁移过去。这个方案比较繁琐，所以不建议经常使用，一个月或者几个月一次即可。
2. 我们会尽量在发版时标明每个改动的提交记录，这样您可以选择性地更新部分新代码到您的项目中。同样在开发时尽量避免太多的自带模块或者组件改动，这样您可以直接将新的某个文件替换到您的项目中。
