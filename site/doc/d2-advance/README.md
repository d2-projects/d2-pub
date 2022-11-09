---
sidebar: auto
---

# [D2 Advance](https://github.com/d2-projects/d2-advance)

> D2 探索版，追求更好的前端工程实践，探索中后台及其以外的更多应用场景 🧗

页面预览 👉 [https://d2.pub/d2-advance/preview](https://d2.pub/d2-advance/preview)
 
代码仓库: [Github](https://gitee.com/d2-projects/d2-advance) | [码云](https://gitee.com/d2-projects/d2-advance) (mirror)

## 目标

- 深色模式 🌛
- 响应式适配 💻 📱
- 更少的 UI 组件库依赖
- 更轻量级，更快速的开发 ⚡️

## 集成

-  ⚡️ [Vite](https://vitejs.dev/guide/), 比 webpack 更快.
- 🖖 Vue3 生态: [vue](https://v3.vuejs.org/)、[vue-router](https://next.router.vuejs.org/)、[vuex](https://vuex.vuejs.org/guide/)
- Tailwind CSS 工具类. By [Windi CSS](https://windicss.org/guide/features.html)
- Typescript 支持: [volar](https://github.com/johnsoncodehk/volar)、[vue-tsc](https://github.com/johnsoncodehk/vue-tsc)
- [IconPark](https://iconpark.bytedance.com/official) 图标: [@icon-park/vue-next](https://github.com/bytedance/IconPark/blob/master/packages/vue-next/README.md)
- 使用 [miragejs](https://miragejs.com/docs/main-concepts/route-handlers/) 对 HTTP 做本地 mock
- 使用 [axios](https://github.com/axios/axios) 发送 HTTP 请求
- [ESLint](https://eslint.org/) 继承 prettier 和 vue 官方的配置
- Git 命令行交互式提交: [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
- 检查 Git 提交信息的格式: [commitlint](https://commitlint.js.org/)
- 检查 Git 暂存文件: [lint-staged](https://github.com/okonet/lint-staged)
- 管理自定义的 Git hooks: [husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/) 结合 [@testing-library/vue](https://github.com/testing-library/vue-testing-library) 进行组件的单元测试 (TODO)
- 生成新版本号和更新日志: [standard-version](https://github.com/conventional-changelog/standard-version)
- 打包时输出 gzip 和 brotli 文件: [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression)

## 常用示例

- Admin `src/views/admin`: 后台管理样例 (IN PROGRESS)
- Space `src/views/space`: 个人空间样例 (IN PROGRESS)
- ...更多示例，期待你来提[建议](https://github.com/d2-projects/d2-advance/issues/new)
