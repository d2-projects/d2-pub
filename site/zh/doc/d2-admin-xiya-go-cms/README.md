# D2Admin GO CMS 适配

基于 [D2Admin v1.7.2](https://github.com/d2-projects/d2-admin/releases/tag/1.7.2) 开发的 [golang](https://golang.org) cms 管理后台，您可以将此看做目前基于 [D2Admin](https://github.com/d2-projects/d2-admin) 实现 **动态菜单**、**动态路由**、**权限控制**、**多环境切换**、**数据表格和表单设计** 的最佳实践。

请配合服务端 [xiya-team/go-cms](https://github.com/xiya-team/go-cms) 使用。

::: tip 名称由来
只包含系统设置功能，未实现 cms 常见的内容管理功能，因对应的服务端仓库为 `xiya-team/go-cms` 遂本仓库取名 `d2-admin-xiya-go-cms`
:::

::: tip 追加更新 v1.8.0
已经追加升级了一些 [D2Admin v1.8.0](https://github.com/d2-projects/d2-admin/releases/tag/1.8.0) 的新特性，例如优化生产环境的构建，可以达到 2s 以内的首屏加载速度；多标签页拖拽排序等功能
:::

## 仓库

| 位置 | 链接 |
| --- | --- |
| GitHub | [https://github.com/d2-projects/d2-admin-xiya-go-cms](https://github.com/d2-projects/d2-admin-xiya-go-cms) |
| 码云 | [https://gitee.com/fairyever/d2-admin-xiya-go-cms](https://gitee.com/fairyever/d2-admin-xiya-go-cms) |

## 账号

您可以使用下面的账号登录：

用户名 `admin` 密码 `admin@xiya.vip`

::: tip
在演示环境中您有权看到编辑和删除界面，但是无法进行编辑和删除操作，这是 API 接口为防止恶意修改做的特殊处理
:::

## 预览

| 位置 | 链接 | 部署位置 | 构建状态 |
| --- | --- | --- | --- |
| d2.pub | [preview](https://d2.pub/d2-admin-xiya-go-cms/preview) | 中国服务器 | [![](https://github.com/d2-projects/d2-admin-xiya-go-cms/workflows/Deploy%20https%3A%2F%2Fd2.pub/badge.svg)](https://github.com/d2-projects/d2-admin-xiya-go-cms/actions?query=workflow%3A%22Deploy+https%3A%2F%2Fd2.pub%22) |
| cdn.d2.pub | [preview](https://cdn.d2.pub/d2-admin-xiya-go-cms/preview) | 七牛云 CDN | [![](https://github.com/d2-projects/d2-admin-xiya-go-cms/workflows/Deploy%20https%3A%2F%2Fcdn.d2.pub/badge.svg)](https://github.com/d2-projects/d2-admin-xiya-go-cms/actions?query=workflow%3A%22Deploy+https%3A%2F%2Fcdn.d2.pub%22) |
| github | [preview](https://d2-projects.github.io/d2-admin-xiya-go-cms) | GitHub pages | [![](https://github.com/d2-projects/d2-admin-xiya-go-cms/workflows/Deploy%20Github/badge.svg)](https://github.com/d2-projects/d2-admin-xiya-go-cms/actions?query=workflow%3A%22Deploy+Github%22) |
| netlify | [preview](https://d2-admin-xiya-go-cms.netlify.com) | Netlify CDN | [![Netlify Status](https://api.netlify.com/api/v1/badges/8fea8718-2196-45de-bbb8-436c3f4da408/deploy-status)](https://app.netlify.com/sites/d2-admin-xiya-go-cms/deploys) |