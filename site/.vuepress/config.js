module.exports = {
  title: 'D2开源组',
  description: 'https://d2.pub',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.d2.pub/files/image-hosting/20200215125724.png' }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?a4d73e21496377fe9f2ddb6b8c97440e";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
  ],
  themeConfig: {
    // logo
    logo: 'https://cdn.d2.pub/files/image-hosting/20200216220856.png',
    // 仓库主页
    repo: 'https://github.com/d2-projects',
    // 自定义仓库链接文字
    repoLabel: 'Github',
    // 假如你的文档仓库和项目本身不在一个仓库
    docsRepo: 'd2-projects/d2-pub',
    // 假如文档不是放在仓库的根目录下
    docsDir: 'site',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    nav: [
      {
        text: '文档',
        items: [
          {
            text: '脚手架',
            items: [
              { text: 'D2 Admin', link: '/doc/d2-admin/' },
              { text: 'D2 Advance', link: '/doc/d2-advance/' },
            ]
          },
          {
            text: '组件',
            items: [
              { text: 'D2 CRUD', link: '/doc/d2-crud-v2/' }
            ]
          },
          {
            text: '开源适配',
            items: [
              { text: 'D2 Admin xiya go cms', link: '/doc/d2-admin-xiya-go-cms/' },
            ]
          },
          {
            text: '其它项目',
            items: [
              { text: 'Folder Explorer', link: '/doc/folder-explorer/' },
              { text: 'Storybook Vue', link: '/doc/storybook-vue/' }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/doc/d2-admin/': [
        {
          title: '开始使用',
          children: [ '', 'learn/start', 'learn/knowledge' ]
        },
        {
          title: '组件',
          children: [ 'component/container', 'component/icon', 'component/icon-svg', 'component/icon-select', 'component/ueditor', 'component/markdown', 'component/highlight', 'component/count-up', 'component/charts' ]
        },
        {
          title: '插件',
          children: [ 'plugin/data-export', 'plugin/data-import', 'plugin/i18n', 'plugin/error', 'plugin/log', 'plugin/console' ]
        },
        {
          title: 'vuex',
          children: [ 'vuex/account', 'vuex/db', 'vuex/fullscreen', 'vuex/gray', 'vuex/log', 'vuex/menu', 'vuex/page', 'vuex/releases', 'vuex/search', 'vuex/size', 'vuex/theme', 'vuex/transition', 'vuex/ua', 'vuex/user' ]
        },
        { title: '路由', path: 'router/' },
        { title: '菜单', path: 'menu/' },
        { title: '异步请求', path: 'ajax/' },
        { title: '多页面', path: 'pages/' },
        { title: '国际化', path: 'locales/' },
        { title: '数据持久化', path: 'db/' },
        { title: 'CSS 实用类', path: 'css/' },
        { title: 'JS Util', path: 'util/' },
        { title: 'webpack', path: 'webpack/' },
        { title: '常见问题', path: 'question/' },
        { title: '其它', path: 'other/' }
      ],
      '/doc/d2-crud-v2/': [
        '',
        'guide',
        'example',
        {
          title: '配置项',
          children: [ 'crud', 'columns', 'options', 'loading-options', 'index-row', 'selection-row', 'row-handle', 'form-options', 'pagination' ]
        },
        'events',
        'slots',
        'migration'
      ],
      '/doc/d2-crud-v1/': [
        '',
        'guide',
        'example',
        {
          title: '配置项',
          children: [ 'crud', 'columns', 'options', 'loading-options', 'index-row', 'selection-row', 'row-handle', 'add-button', 'form-template', 'form-options', 'pagination' ]
        },
        'events',
        'slots'
      ],
      '/doc/d2-admin-xiya-go-cms/': [
        ''
      ],
      '/doc/folder-explorer/': [
        ''
      ],
      '/doc/storybook-vue/': [
        ''
      ],
    }
  }
}
