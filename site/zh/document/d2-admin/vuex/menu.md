# menu

## state.header

顶栏菜单

## state.aside

侧边栏菜单

## state.asideCollapse

侧边栏的折叠状态

## actions.asideCollapseSet

### 介绍

设置侧边栏展开或者收缩。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| collapse | 新的值 | 必选 | Boolean |  |  |

### 返回

promise

### 示例

``` js
// 折叠侧边栏菜单
this.$store.dispatch('d2admin/menu/asideCollapseSet', true)
// 展开侧边栏菜单
this.$store.dispatch('d2admin/menu/asideCollapseSet', false)
```

## actions.asideCollapseToggle

### 介绍

切换侧边栏展开和收缩。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/menu/asideCollapseToggle')
```

## actions.asideCollapseLoad

### 介绍

从持久化数据读取侧边栏展开或者收缩。

### 参数

无

### 返回

promise

### 示例

``` js
this.$store.dispatch('d2admin/menu/asideCollapseLoad')
```

## mutations.headerSet

### 介绍

设置顶栏菜单。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 菜单 | 必选 | Array |  |  |

### 示例

``` js
this.$store.commit('d2admin/menu/headerSet', menu)
```

### menu 数据格式

| 字段名 | 介绍 | 必选 | 值类型 | 默认值 |
| --- | --- | --- | --- | --- |
| path | 路由 path | 非 | String | `lodash.uniqueId('d2-menu-empty-')` |
| title | 菜单名称 | 必选 | String | 未命名菜单 |
| icon | 菜单图标 | 非 | String |  |
| iconSvg | SVG 菜单图标 | 非 | String |  |
| children | 子菜单数据 | 非 | Array |  |

示例：

``` js
[
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    path: '/demo',
    title: '示例',
    icon: 'puzzle-piece',
    children: [
      {
        path: '/demo/plugins',
        title: '插件',
        icon: 'plug'
      }
    ]
  }
]
```

### 临时菜单

支持设置临时菜单，如果您在开发页面前需要先设计好菜单结构，可以只设置 title 字段，D2Admin 在生成菜单时会使用随机唯一 id 区分菜单项目，并且在点击时提示这是一个临时菜单。

设置临时菜单的示例：

``` js
[
  {
    title: '空菜单演示',
    icon: 'folder-o',
    children: [
      {
        title: '正在开发 1',
        children: [
          { title: '正在开发 1-1' },
          { title: '正在开发 1-2' }
        ]
      },
      { title: '正在开发 2' },
      { title: '正在开发 3' }
    ]
  }
]
```

### 外部链接

支持设置外部链接，您可以直接这样写：

``` js
[
  {
    title: '跳转外部链接',
    icon: 'link',
    children: [
      {
        path: 'https://github.com/d2-projects/d2-admin',
        title: 'D2Admin Github',
        icon: 'github'
      },
      {
        path: 'https://juejin.im/user/57a48b632e958a006691b946/posts',
        title: '掘金',
        icon: 'globe'
      }
    ]
  }
]
```

以 `https://` 或者 `http://` 开头的 path 会被当做外部链接处理。

### svg 图标

如果您不满足于 fontawesome 图表库，或者需要自己定制菜单图标，可以在菜单中增加 iconSvg 字段：

``` js
{
  title: 'svg 菜单图标',
  iconSvg: 'd2admin',
  children: [
    { title: 'add', iconSvg: 'add' },
    { title: 'alarm', iconSvg: 'alarm' }
  ]
}
```

iconSvg 字段可选值同 [icon-svg](/zh/sys-components/icon-svg.md) 的 name 属性。

### 取消默认图标

如果 icon 字段不设置，渲染时会自动根据是否有子菜单选择性渲染 `file-o` 和 `folder-o` 图标。如果您不希望发生这种表现，请在菜单属性中显式声明 `icon` 等于空字符串：

``` js
{
  icon: ''
}
```

这样会将此菜单设置为不显示任何图标。

## mutations.asideSet

### 介绍

设置侧边栏菜单。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 菜单 | 必选 | Array |  |  |

### 示例

``` js
this.$store.commit('d2admin/menu/asideSet', menu)
```

menu 的格式同 mutations.headerSet