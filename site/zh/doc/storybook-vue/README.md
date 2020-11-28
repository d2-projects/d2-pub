---
sidebar: auto
---

# Storybook vue

简单的 vue.js 模板

[GitHub](https://github.com/d2-projects/storybook-vue)

![](https://cdn.d2.pub/files/image-hosting/20200424155542.png)

## 介绍

* 开箱即用的开发环境
* 立刻基于 vue.js 快速开始编写一系列页面代码
* 自动根据本地文件结构自动生成所有页面的入口菜单
* 自动在 GitHub 上自动部署网站方便预览和分享
* 自动在预览网站生成每个页面的源码链接
* 自动基于 git 提交记录在 GitHub 上发布新的版本

## 准备好了什么

* 基于 cli4 的基础项目结构
* 组件自动注册
* 路由自动注册
* 菜单自动生成
* 部署后显示页面源码链接功能
* 更美观的滚动条
* 配置好的 CI 文件帮你自动发版和部署
* 符合 angular 提交准则的 git 工具
* 一个简洁的布局，一个简单的页面容器组件
* 内置 ElementUI 和 lodash

## 适用场景

* 有简单的多页面书写需求，并希望完成后可以在线预览
* 学习过程中想试验一下并整理成册
* 分别尝试某个插件的很多功能
* 部署一个简单的展示网页

## 不适用场景

* 你想正式写一个全功能网站
* 你只是需要一个记事本，它不如普通的记事本方便
* 需要专业的组件隔离展示和测试，不妨试试 [storybook.js](https://storybook.js.org/)

## 前提要求

* 基础的 git 知识
* GitHub 账户
* 基础前端开发和 vue.js 相关技能

## 使用方法

首先进入 [项目主页](https://github.com/d2-projects/storybook-vue) 将项目 fork 至您的账号下，然后新建 GitHub 空仓库，模板选择 **storybook-vue**，并克隆到本地。

![](https://cdn.d2.pub/files/image-hosting/20200424182544.png)

删除 docs 文件夹。

修改 package.json 文件中 `repository.url` 为您仓库的 git 地址。

安装依赖：

``` sh
yarn
```

运行：

``` sh
yarn dev
```

至此已可以开始您的书写。

## 内置组件

### github-ribbon

![](https://cdn.d2.pub/files/image-hosting/20200424213459.png)

右上角的 GitHub 链接绶带，无可接受参数，使用了 [d2-ribbons](https://github.com/d2-projects/d2-ribbons) 中的设计，渲染效果是附带图片的 `position: fixed` 链接，固定在屏幕右上角，默认链接根据 package.json 中的信息自动指向当前仓库地址。

::: tip
如果你觉得默认图片样式不好看，可以到 [d2-ribbons](https://github.com/d2-projects/d2-ribbons) 换一个喜欢的样式
:::

### source-code

一个 `<a>` 容器，无可接受参数，没有自身样式，有默认 slot。功能是跳转到当前页面的源码页面。仓库地址根据 package.json 中的信息确定，自动确定源码路径依赖 [vue-filename-injector](https://github.com/d2-projects/vue-filename-injector) 实现。

使用示例：

``` vue
<source-code>
  <button>点我查看本页源码</button>
</source-code>
```

### story-container

页面内容容器，无可接受参数，每个页面的根组件应该使用它。具有 `default` `header` `footer` slot。

使用示例：

``` vue
<template>
  <story-container>
    <template slot="header">我是页头</template>
    我是页面内容
    <template slot="footer">我是页脚</template>
  </story-container>
</template>
```

## 页面和路由规则

自动生成路由的规则见 [vue-route-generator](https://github.com/ktsn/vue-route-generator)，项目中使用 [vue-cli-plugin-auto-routing](https://github.com/ktsn/vue-cli-plugin-auto-routing) 实现自动生成路由配置，并依据生成的路由数据计算出菜单显示。

## 提交

### 准则

请使用 [angular 提交准则](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)，具体可参考：[https://www.conventionalcommits.org/zh-hans](https://www.conventionalcommits.org/zh-hans)

本项目已经使用 [commitizen](https://github.com/commitizen/cz-cli) 工具进行初始化，可以直接在命令行中体验交互式提交，通过选择+填空的方式生成规范的 commit message：

首先需要在您计算机中全局安装 commitizen ：

``` sh
npm i -g commitizen
```

提交代码：

``` sh
git cz
```

示例：

``` sh
git status
git add .
git cz
cz-cli@4.0.3, cz-conventional-changelog@3.1.0

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) 
? Write a short, imperative tense description of the change (max 94 chars):
 (5) 修改了首页
? Provide a longer description of the change: (press enter to skip)
? Are there any breaking changes? No
? Does this change affect any open issues? No

[master 85ad888] feat: 修改了首页
 2 files changed, 1 insertion(+), 33 deletions(-)
 delete mode 100644 docs/CHANGELOG.md
```

### 分支管理

推荐使用 master + dev 模式：

- `master`：默认分支，包含了所有的版本 tag，最后一次提交永远是最近一次版本发布，保证同个版本下载的代码都是一致的，同时也和部署到预览的代码一致
- `dev`：开发分支，里面是上一次版本发布后，待发布的提交，当需要发布时直接合并到 `master`
- `gh-pages`：部署 Github Pages 时生产的分支，请忽略

开发流程如下：

``` sh
# ...在 dev 完成多次 commit 后
(dev) git push
(dev) git checkout master
(master) git merge dev # 把即将发布的代码合并到 master
(master) git push
# ...等待发布完成
(master) git pull # 发布的过程中可能会自动产生一些提交
(master) git checkout dev
(dev) git merge master
(dev) git push # 让 dev 与 master 保持一致
# ... 继续在 dev 开发
```

## 部署

::: tip
请确认您项目中的 package.json 文件中 `repository.url` 必须为您仓库的 git 地址。
:::

### 准备

在开始部署之前您需要配置项目的 `ACCESS_TOKEN`。

![](https://cdn.d2.pub/files/image-hosting/20200424171017.png)

进入个人设置，选择 `Developer settings` > `Personal access tokens` > `Generate new token` 创建新的 token，名称随意填写，权限勾选 repo。

![](https://cdn.d2.pub/files/image-hosting/20200424171337.png)

点击 `Generate token` 完成创建，记录好生成的 token。

![](https://cdn.d2.pub/files/image-hosting/20200424171604.png)

进入当前仓库的设置 > `Secrets` > `Add a new secret` 创建新的私有数据。`Name` 值为 `ACCESS_TOKEN`，`Value` 值为刚刚得到的 token。

![](https://cdn.d2.pub/files/image-hosting/20200424172051.png)

点击 `Add secret` 完成创建。

![](https://cdn.d2.pub/files/image-hosting/20200424172214.png)

至此部署准备完成。

### 规则

项目基于 GitHub Action 实现自动发版和部署。具体规则如下：

* 在 master 分支每次发生提交时，触发新版本发布监检测 [release.yml](https://github.com/d2-projects/storybook-vue/blob/master/.github/workflows/release.yml)，此动作会基于您的提交记录判断是否需要变更版本号以及发布新的 release
* 在发布新的 release 之后，会触发构建命令 [deploy.yml](https://github.com/d2-projects/storybook-vue/blob/master/.github/workflows/deploy.yml)，构建结果提交至 gh-pages 分支作为预览地址

::: tip
上述自动操作的前提是在代码提交时按照本文档中的要求进行的 git 操作
:::

代码再次变更后将本地项目提交到远程：

``` sh
git add .
git cz
git push origin master
```

您可以在仓库的 Action 页面查看自动发版和部署情况：

![](https://cdn.d2.pub/files/image-hosting/20200424184955.png)

在  Release pipeline 执行结束后，如果有新版本将会自动部署预览：

![](https://cdn.d2.pub/files/image-hosting/20200424185123.png)

所有 Action 结束之后，您可以在仓库的设置页面看到该仓库对应的预览地址：

![](https://cdn.d2.pub/files/image-hosting/20200424185259.png)
