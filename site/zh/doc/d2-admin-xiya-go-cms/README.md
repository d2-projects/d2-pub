---
sidebar: auto
---

# D2Admin GO CMS 适配

基于 [D2Admin v1.7.2](https://github.com/d2-projects/d2-admin/releases/tag/1.7.2) 开发的 [golang](https://golang.org) cms 管理后台，实现了 **动态菜单**、**动态路由**、**权限控制** 和 **多环境切换**，请配合服务端 [xiya-team/go-cms](https://github.com/xiya-team/go-cms) 使用。

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
| 码云 | [https://gitee.com/d2-projects/d2-admin-xiya-go-cms](https://gitee.com/d2-projects/d2-admin-xiya-go-cms) |

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

## 项目结构

::: tip 树形图生成工具
[Folder Explorer](https://github.com/d2-projects/folder-explorer)
:::

```
├─.browserslistrc ----------------- // 浏览器兼容设置
├─.env ---------------------------- // 环境变量
├─.env.development ---------------- // 环境变量 开发
├─.env.github --------------------- // 环境变量 预览部署 GitHub
├─.env.netlify -------------------- // 环境变量 预览部署 Netlify
├─.env.preview -------------------- // 环境变量 预览部署 CDN 以及官网
├─.eslintignore ------------------- // 代码检查忽略配置
├─.eslintrc.js -------------------- // 代码检查配置
├─.github ------------------------- // GitHub 的相关文件
│ ├─ISSUE_TEMPLATE ---------------- // GitHub issue 模板
│ └─workflows --------------------- // GitHub actions
├─.gitignore ---------------------- // Git 忽略配置
├─.postcssrc.js ------------------- // postcss 配置
├─LICENSE ------------------------- // 开源协议
├─README.md ----------------------- // 介绍
├─babel.config.js ----------------- // babel 配置
├─dependencies-cdn.js ------------- // 指定构建时使用 CDN 加载的依赖
├─jest.config.js ------------------ // 单元测试配置
├─jsconfig.json ------------------- // JavaScript 配置
├─package-lock.json --------------- // 依赖版本锁定
├─package.json -------------------- // 项目信息
├─public -------------------------- // 静态资源文件夹
│ ├─icon.ico ---------------------- // 网站图标
│ ├─image 
│ │ ├─loading --------------------- // 首页加载 loading
│ │ └─theme ----------------------- // 主题使用的图片
│ └─index.html -------------------- // 页面模板
├─src ----------------------------- // 代码主文件夹
│ ├─App.vue ----------------------- // 根组件
│ ├─api --------------------------- // 接口配置
│ │ ├─index.js -------------------- // 接口自动导入
│ │ ├─modules --------------------- // 接口模块
│ │ │ ├─captcha.js ---------------- // 人机验证
│ │ │ ├─config.js ----------------- // 系统管理 参数
│ │ │ ├─dept.js ------------------- // 系统管理 部门
│ │ │ ├─dict-data.js -------------- // 系统管理 字典 内容
│ │ │ ├─dict.js ------------------- // 系统管理 字典
│ │ │ ├─menu.js ------------------- // 系统管理 菜单
│ │ │ ├─post.js ------------------- // 系统管理 岗位
│ │ │ ├─role.js ------------------- // 系统管理 角色
│ │ │ ├─upload.js ----------------- // 文件上传
│ │ │ └─user.js ------------------- // 系统管理 用户
│ │ └─service.js ------------------ // 网络请求服务
│ ├─assets ------------------------ // 资源文件夹
│ │ ├─style ----------------------- // 样式文件
│ │ │ ├─animate ------------------- // 动画效果
│ │ │ ├─fixed --------------------- // 覆盖样式
│ │ │ ├─public-class.scss --------- // 生层具体 css 类样式
│ │ │ ├─public.scss --------------- // 公用 scss 数据文件
│ │ │ ├─theme --------------------- // 主题样式
│ │ │ │ ├─d2 
│ │ │ │ ├─line 
│ │ │ │ ├─register.scss ----------- // 注册全部主题样式
│ │ │ │ ├─star 
│ │ │ │ ├─theme-base.scss --------- // 所有主题公用的样式
│ │ │ │ ├─theme.scss -------------- // 每个主题特有的样式
│ │ │ │ ├─tomorrow-night-blue 
│ │ │ │ └─violet 
│ │ │ └─unit ---------------------- // 变量定义
│ │ │   └─color.scss -------------- // 颜色
│ │ └─svg-icons ------------------- // svg 图标
│ │   ├─icons --------------------- // 图标
│ │   └─index.js ------------------ // 自动注册图标
│ ├─components -------------------- // 内置组件
│ ├─env.js ------------------------ // 环境变量处理
│ ├─filters ----------------------- // 过滤器
│ │ ├─index.js -------------------- // 自动注册
│ │ ├─modules --------------------- // 过滤器模块
│ │ │ └─time.js 
│ │ └─snippets -------------------- // 代码片段配置
│ │   └─time-snippets.js 
│ ├─i18n.js ----------------------- // 国际化
│ ├─layout ------------------------ // 布局
│ │ └─header-aside 
│ ├─locales ----------------------- // 语言配置文件
│ ├─main.js ----------------------- // 主入口
│ ├─mixins ------------------------ // mixins
│ │ ├─component-dict.js ----------- // 组件混合逻辑 字典相关
│ │ ├─component-multiple.js ------- // 组件混合逻辑 多选相关
│ │ ├─component-tree.js ----------- // 组件混合逻辑 树相关
│ │ ├─component-vmodel.js --------- // 组件混合逻辑 绑定相关
│ │ ├─crud-dict.js ---------------- // CRUD 页面混合逻辑 字典相关
│ │ ├─crud-form-dialog.js --------- // CRUD 表单混合逻辑 弹出框相关
│ │ ├─crud-form-helper.js --------- // CRUD 表单混合逻辑 辅助方法相关
│ │ ├─crud-form.js ---------------- // CRUD 表单混合逻辑
│ │ ├─crud-pagination.js ---------- // CRUD 页面混合逻辑 分页相关
│ │ ├─crud-permission.js ---------- // CRUD 页面混合逻辑 权限相关
│ │ ├─crud-status.js -------------- // CRUD 页面混合逻辑 状态相关
│ │ ├─crud-table.js --------------- // CRUD 页面混合逻辑 表格相关
│ │ └─el-field-change.js ---------- // element 适配混合逻辑 表单校验
│ ├─permission.js ----------------- // 权限辅助工具
│ ├─plugin ------------------------ // 插件
│ │ ├─api ------------------------- // 网络请求
│ │ ├─d2admin --------------------- // D2Admin
│ │ ├─env ------------------------- // 环境变量
│ │ ├─error ----------------------- // 错误捕捉
│ │ ├─lodash ---------------------- // lodash
│ │ ├─log ------------------------- // 日志
│ │ ├─open ------------------------ // 打开新页面
│ │ └─permission ------------------ // 权限
│ ├─router ------------------------ // 路由
│ │ └─index.js 
│ ├─setting.js -------------------- // 项目配置
│ ├─snippets ---------------------- // 代码片段配置
│ │ ├─create-element-snippets.json 
│ │ └─log-snippets.json 
│ ├─store ------------------------- // 全局状态
│ │ ├─index.js -------------------- // 入口
│ │ ├─modules 
│ │ │ └─d2admin ------------------- // D2Admin 系统模块
│ │ │   ├─index.js 
│ │ │   ├─modules 
│ │ │   │ ├─api.js ---------------- // 网络请求地址管理
│ │ │   │ ├─db.js ----------------- // 持久化
│ │ │   │ ├─dict.js --------------- // 字典
│ │ │   │ ├─fullscreen.js --------- // 全屏
│ │ │   │ ├─gray.js --------------- // 灰度
│ │ │   │ ├─log.js ---------------- // 日志
│ │ │   │ ├─menu.js --------------- // 菜单
│ │ │   │ ├─page.js --------------- // 多页面
│ │ │   │ ├─permission.js --------- // 权限和动态路由
│ │ │   │ ├─releases.js ----------- // 版本
│ │ │   │ ├─search.js ------------- // 全局搜索
│ │ │   │ ├─size.js --------------- // 组件尺寸
│ │ │   │ ├─sys.js ---------------- // 系统
│ │ │   │ ├─theme.js -------------- // 主题
│ │ │   │ ├─transition.js --------- // 过渡效果
│ │ │   │ ├─ua.js ----------------- // 浏览器信息
│ │ │   │ └─user.js --------------- // 用户
│ │ │   └─snippets ---------------- // 代码片段配置
│ │ │     └─snippets.js 
│ │ └─snippets -------------------- // 代码片段配置
│ │   └─snippets.js 
│ ├─utils ------------------------- // 工具包
│ │ ├─index.js -------------------- // 自动注册
│ │ ├─modules 
│ │ │ ├─cookies.js ---------------- // cookie 操作
│ │ │ ├─db.js --------------------- // 数据持久化
│ │ │ ├─fn.js --------------------- // 常用方法
│ │ │ ├─helper.js ----------------- // 辅助函数
│ │ │ ├─import-development.js ----- // 导入文件 开发模式
│ │ │ ├─import-production.js ------ // 导入文件 生产模式
│ │ │ ├─log.js -------------------- // 日志记录
│ │ │ └─time.js ------------------- // 时间处理
│ │ └─snippets -------------------- // 代码片段配置
│ └─views ------------------------- // 页面文件夹
│   ├─management ------------------ // 系统管理模块
│   │ ├─config -------------------- // 参数
│   │ ├─dept ---------------------- // 部门
│   │ ├─dict ---------------------- // 字典
│   │ ├─dict-data ----------------- // 字典数据
│   │ ├─menu ---------------------- // 菜单
│   │ ├─post ---------------------- // 岗位
│   │ ├─role ---------------------- // 角色
│   │ └─user ---------------------- // 用户
│   └─system ---------------------- // 系统自带页面
│     ├─error --------------------- // 错误页面
│     ├─function ------------------ // 功能性页面
│     ├─index --------------------- // 首页
│     ├─log ----------------------- // 日志记录
│     └─login --------------------- // 登录
├─tests --------------------------- // 测试配置
├─tools --------------------------- // 工具
│ ├─dir-exists.js ----------------- // 判断文件路径是否存在
│ └─snippets.js ------------------- // 整合零碎代码片段
├─vue.config.js ------------------- // vue cli 配置文件
└─yarn.lock ----------------------- // 依赖版本锁定
```
