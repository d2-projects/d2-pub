# 国际化

## 依赖

本项目国际化依赖插件 [vue-i18n](http://kazupon.github.io/vue-i18n../)

## 安装

D2Admin 使用 Vue Cli 3.x 构建，所以使用下面的安装方式：

``` sh
vue add i18n
```

安装完毕之后删除生成的一些无用文件。项目中已经安装完成，可以直接使用。

## 配置

如果您不是想自己在项目中安装，可以略过这一节。

下面的演示代码不一定在后面的某个时间更新，最新的代码以您阅读时 [仓库](https://github.com/d2-projects/d2-admin) 中代码为准，您可以点击下面的链接跳转到仓库查看。

* [.env](https://github.com/d2-projects/d2-admin/blob/master/.env)

```
VUE_APP_I18N_LOCALE=zh-chs
VUE_APP_I18N_FALLBACK_LOCALE=en
```

* [vue.config.js](https://github.com/d2-projects/d2-admin/blob/master/vue.config.js)

``` js
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-chs',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
```

* [src/i18n.js](https://github.com/d2-projects/d2-admin/blob/master/src/i18n.js)

``` js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import util from '@/libs/util'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const messages = loadLocaleMessages()

Vue.prototype.$languages = Object.keys(messages).map(langlage => ({
  label: messages[langlage]._name,
  value: langlage
}))

export default new VueI18n({
  locale: util.cookies.get('lang') || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages
})
```

* [src/main.js](https://github.com/d2-projects/d2-admin/blob/master/src/main.js)

``` js
import Vue from 'vue'
import i18n from './i18n'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  ...
})
```

* [src/App.vue](https://github.com/d2-projects/d2-admin/blob/master/src/App.vue)

``` vue
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
```

* [src/layout/header-aside/components/header-locales/index.vue](https://github.com/d2-projects/d2-admin/blob/master/src/layout/header-aside/components/header-locales/index.vue)

``` vue
<template>
  <el-dropdown
    placement="bottom"
    size="small"
    @command="onChangeLocale">
    <el-button class="d2-mr btn-text can-hover" type="text">
      <d2-icon name="language" style="font-size: 16px;"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="language in $languages"
        :key="language.value"
        :command="language.value">
        <d2-icon :name="$i18n.locale === language.value ? 'dot-circle-o' : 'circle-o'" class="d2-mr-5"/>
        {{ language.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    onChangeLocale (command) {
      this.$i18n.locale = command
      // 下面的部分可以去掉
      let message = `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`
      if (['TRAVIS', 'NETLIFY'].includes(process.env.VUE_APP_BUILD_MODE)) {
        message = [
          `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`,
          `仅提供切换功能，没有配置具体的语言数据 `,
          `文档参考：<a class="el-link el-link--primary is-underline" target="_blank" href="https://d2.pub../doc/d2-admin/locales">《国际化 | D2Admin》</a>`
        ].join('<br/>')
      }
      this.$notify({
        title: '语言变更',
        dangerouslyUseHTMLString: true,
        message
      })
    }
  }
}
</script>
```

别忘了在 [src/layout/header-aside/layout.vue](https://github.com/d2-projects/d2-admin/blob/master/src/layout/header-aside/layout.vue) 中加入上面这个新的组件，示例：

``` vue {6,14-19}
<template>
  <div class="d2-layout-header-aside-group">
    ...
    <div class="d2-header-right" flex-box="0">
      ...
      <d2-header-locales/>
      ...
    </div>
    ...
  </div>
</template>

<script>
import d2HeaderLocales from './components/header-locales'
export default {
  components: {
    d2HeaderLocales
  }
}
</script>
```

如果您需要在登录页面添加语言切换，可以参考 [src/views/system/login/page.vue](https://github.com/d2-projects/d2-admin/blob/master/src/views/system/login/page.vue)

``` html {3-9}
<div class="page-login--content-footer">
  <p class="page-login--content-footer-locales">
    <a
      v-for="language in $languages"
      :key="language.value"
      :command="language.value"
      @click="$i18n.locale = language.value">
      {{ language.label }}
    </a>
  </p>
</div>
```

最后，别忘了 [src/locales](https://github.com/d2-projects/d2-admin/tree/master/src/locales) 文件夹。

* locales
  * 英语 [en.json](https://github.com/d2-projects/d2-admin/blob/master/src/locales/en.json)
  * 日语 [ja.json](https://github.com/d2-projects/d2-admin/blob/master/src/locales/ja.json)
  * 简体中文 [zh-chs.json](https://github.com/d2-projects/d2-admin/blob/master/src/locales/zh-chs.json)
  * 繁体中文 [zh-cht.json](https://github.com/d2-projects/d2-admin/blob/master/src/locales/zh-cht.json)

关于这个文件夹的内容会在下面的章节介绍。

## 使用

完整的使用方式见 [Vue I18n 文档](http://kazupon.github.io/vue-i18n../guide/formatting.html)。D2Admin 中使用的是其最基础的使用方式。

在项目中一切配置都已经为您准备好，您只需修改 [src/locales](https://github.com/d2-projects/d2-admin/tree/master/src/locales) 中的配置内容和使用即可。

::: tip 注意
`_name` 字段是保留的，请不要修改它
:::

下面以在页面中显示多国语言的 `你好` 为例：

* en.json

``` json
{
  "_name": "English",
  "hello": "Hello"
}
```

* ja.json

``` json
{
  "_name": "日本語",
  "hello": "こんにちは"
}
```

* zh-chs.json

``` json
{
  "_name": "简体中文",
  "hello": "你好"
}
```

* zh-cht.json

``` json
{
  "_name": "繁體中文",
  "hello": "你好"
}
```

在单文件组件中使用：

``` vue
<template>
  <div>
    {{$t('hello')}}
  </div>
</template>

<script>
  mounted () {
    console.log(this.$t('hello'))
  }
}
</script>
```

页面将在不同的语言环境下显示和输出不同的文字内容。

## 进阶

如果您有条件，我非常推荐你尝试使用 [BabelEdit](https://www.codeandweb.com/babeledit-vue) 来提高您的国际化翻译效率。

![](https://cdn.d2.pub/files/image-hosting/mweb/15669995917172.jpg)

软件界面上展示的适配的项目种类，暂时我们只需要 vue-i18n 的支持。

![](https://cdn.d2.pub/files/image-hosting/mweb/15669995162240.jpg)

使用方式：

点击界面左上角的 Open Project，选择 D2Admin 中的 d2-admin.babel 文件导入项目。

![](https://cdn.d2.pub/files/image-hosting/mweb/15669997254598.jpg)

可以看到目前项目中自带的多国语言配置：

![](https://cdn.d2.pub/files/image-hosting/mweb/15669998884340.jpg)

在右侧的输入框可以随意编辑，保存后软件会自动更新 D2Admin 项目中的语言配置文件。

下面列举几个我认为很棒的特点：

备选语言完善

支持设置默认语言，以及自动生成其它国家语言的设置文件。

![](https://cdn.d2.pub/files/image-hosting/mweb/15670000058515.jpg)

自动翻译

购买激活码之后附带赠送 250,000 字的谷歌翻译额度（可以后续购买），在这之内你可以只设置一种语言，软件自动根据谷歌翻译结果帮你自动填充其它语言的文字配置。

![](https://cdn.d2.pub/files/image-hosting/mweb/15670000464682.jpg)

多种输出格式

自定义输出的缩进以及输出类型。

![](https://cdn.d2.pub/files/image-hosting/mweb/15670001708840.jpg)


与 vue 项目适配

可以同时预览某句话在项目中被使用的位置。

![](https://cdn.d2.pub/files/image-hosting/mweb/15670000968055.jpg)

自动生成调用代码

可以快速生成调用代码，并支持自定义代码格式。

![](https://cdn.d2.pub/files/image-hosting/mweb/15670002094044.jpg)

此部分**非广告内容**，属于我个人购买正版使用一段时间之后的心得推荐。此软件 ￥158 / 用户，如有需要请直接官网购买。

## 附注

这里给出一份曾经使用过的配置，后来取消了这些语言设置是因为考虑到实际中小项目是不需要多语言的，这些代码在项目中反而会造成一些改动时的困扰，所以保留一个随时可以使用 i18n 的状态，但是不内置语言配置，需要的话请自行添加翻译。

使用参考 [d2-admin/tree/54b8de550c9bc7a318bfa7014faa0b208b7e7c51](https://github.com/d2-projects/d2-admin/tree/54b8de550c9bc7a318bfa7014faa0b208b7e7c51)

点击下面的链接可以直达当时的语言配置文件：

* [en.json](https://github.com/d2-projects/d2-admin/blob/54b8de550c9bc7a318bfa7014faa0b208b7e7c51/src/locales/en.json)
* [ja.json](https://github.com/d2-projects/d2-admin/blob/54b8de550c9bc7a318bfa7014faa0b208b7e7c51/src/locales/ja.json)
* [zh-chs.json](https://github.com/d2-projects/d2-admin/blob/54b8de550c9bc7a318bfa7014faa0b208b7e7c51/src/locales/zh-chs.json)
* [zh-cht.json](https://github.com/d2-projects/d2-admin/blob/54b8de550c9bc7a318bfa7014faa0b208b7e7c51/src/locales/zh-cht.json)