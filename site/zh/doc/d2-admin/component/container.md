# d2-container

页面容器组件

::: tip 提示
`<d2-container>` 是 D2Admin 构建页面最重要的组件，请仔细阅读本文档
:::

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 容器模式 | 非 | String | full card ghost | full |
| better-scroll | 使用自定义滚动条 | 非 | Boolean |  | false |
| better-scroll-options | 自定义滚动条配置 | 非 | Object | [better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | 见下 |
| scroll-delay | scroll 事件的节流间隔(ms) 只在 `better-scroll: false` 时有效 | 非 | Number |  | 10 |
| filename | 当前文件在项目中的路径，更多介绍见下 | 非 | String |  |  |

`附` **better-scroll-options 默认值**

``` js
{
	mouseWheel: true,
	scrollbar: {
	  fade: true,
		interactive: false
	}
}
```

设置的参数值会和默认值使用 `Object.assign` 合并，最后在初始化 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 时传入

`附` **filename 参数的用途**

此参数是为 [在线预览](https://d2.pub/d2-admin/preview) 中页面右下角的查看源码链接功能准备。传入的值为当前页面组件在项目中的文件路径，这样可以保证在点击按钮时可以跳转到正确的 github 文件地址。

您应该在开发过程中忽略这个参数，不要赋值，页面容器组件右下角的跳转按钮也会自动消失。

::: tip
在 [1.6.13](https://github.com/d2-projects/d2-admin/releases/tag/1.6.13) 之后，如果 filename 参数不传值，跳转按钮才会自动隐藏。如果您使用之前版本，如有需要请参照此次更新介绍修改您的代码。
:::

## 模式

该组件一共分为三种模式分别适应不同类型页面的需要，详细介绍见下。

`附` 下面的介绍中 **主区域** 范围如图所示：

![](./image/container/space-main@2x.png)

`附` 原生滚动条和自定义滚动条的区别

![](./image/container/scrollbar-type@2x.png)

::: tip
为了美观，每种模式的布局都会自动在右侧保留 20px 的外边距，见上图蓝色边框右侧区域
:::

## 模式: full

full 模式会生成一个无论内容多少，都会填满主区域的页面容器。

页面内容较少时，d2-container 也会填满主区域：

``` vue
<template>
  <d2-container>
    内容
  </d2-container>
</template>
```

![](./image/container/full/normal/short@2x.png)

页面有较多内容时会在侧面产生滚动条

![](./image/container/full/normal/long@2x.png)

支持 header 和 footer 插槽，两个区域分别会固定在主体区域的顶部和底部，内容压缩至中间

``` vue
<template>
  <d2-container>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](./image/container/full/slot/short@2x.png)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](./image/container/full/slot/long@2x.png)

设置 better-scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container better-scroll>
    内容
  </d2-container>
</template>
```

![](./image/container/full/bs/short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](./image/container/full/bs/long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会出现在 header 和 footer 之间

``` vue
<template>
  <d2-container better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Header</template>
  </d2-container>
</template>
```

![](./image/container/full/bs/long-slot@2x.png)

## 模式: card

卡片模式适用于简单的小页面，可以方便地实现下面的布局效果：

``` vue
<template>
  <d2-container type="card">
    内容
  </d2-container>
</template>
```

![](./image/container/card/normal/short@2x.png)

如果内容超出一屏长度，会在右侧显示滚动条

![](./image/container/card/normal/long@2x.png)

如果内容超出一屏，滚动条滚动到底部后主体区域会距离底部 20px 距离

![](./image/container/card/normal/long-scroll-end@2x.png)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

``` vue
<template>
  <d2-container type="card">
    <template slot="header">Header</template>
    <d2-demo-article/>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](./image/container/card/slot/short@2x.png)

如果使用插槽后内容超出一屏，滚动条会在 header 和 footer 之间显示

![](./image/container/card/slot/long@2x.png)

如果使用插槽后内容超出一屏，滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](./image/container/card/slot/long-end@2x.png)

设置 better-scroll 属性可以启用自定义滚动条，滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container type="card" better-scroll>
    内容
  </d2-container>
</template>
```

![](./image/container/card/bs/short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](./image/container/card/bs/long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

``` vue
<template>
  <d2-container type="card" better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](./image/container/card/bs/long-slot@2x.png)

如果使用插槽后内容超出一屏，自定义滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](./image/container/card/bs/long-slot-end@2x.png)

## 模式: ghost

ghost 模式适合对页面有定制需求的用户，此模式生成一个没有背景颜色的页面区域

``` vue
<template>
  <d2-container type="ghost">
    内容
  </d2-container>
</template>
```

该模式默认没有内边距，示例中的内边距样式需要自行添加，比如可以在组件内嵌添加一层带有 .d2-pt 和 .d2-pb class 的 div，像下面这样

``` vue
<template>
  <d2-container type="ghost">
    <div class="d2-pt d2-pb">
      内容
    </div>
  </d2-container>
</template>
```

![](./image/container/ghost/normal/short@2x.png)

如果内容超出一屏长度，会在右侧显示滚动条

![](./image/container/ghost/normal/long@2x.png)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

``` vue
<template>
  <d2-container type="ghost">
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

如果你希望有内边距：

``` vue
<template>
  <d2-container type="ghost">
    <template slot="header">Header</template>
    <div class="d2-pt d2-pb">
      内容
    </div>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](./image/container/ghost/slot/short@2x.png)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](./image/container/ghost/slot/long@2x.png)

设置 better-scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    内容
  </d2-container>
</template>
```

同样，如果你希望有内边距：

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <div class="d2-pt d2-pb">
      内容
    </div>
  </d2-container>
</template>
```

![](./image/container/ghost/bs/short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](./image/container/ghost/bs/long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

有内边距：

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <template slot="header">Header</template>
    <div class="d2-pt d2-pb">
      内容
    </div>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](./image/container/ghost/bs/long-slot@2x.png)

## 事件

### scroll

**介绍**

发生滚动时触发。

**参数**

`Object`

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| x | 横向距离 | 必选 | Number |  | 0 |
| y | 纵向距离 | 必选 | Number |  | 0 |

**示例**

``` vue
<template>
  <d2-container @scroll="({x, y}) => { scrollTop = y }">
    {{scrollTop}}
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0
    }
  }
}
</script>
```

## 方法

### scrollToTop

**介绍**

返回顶部

**参数**

无

**示例**

``` vue
<template>
  <d2-container ref="container">
    <el-button @click="$refs.container.scrollToTop">
      返回顶部
    </el-button>
  </d2-container>
</template>
```

### scrollBy

**介绍**

滚动相对位置

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| x | 横向距离 | 必选 | Number |  | 0 |
| y | 纵向距离 | 必选 | Number |  | 0 |
| time | 动画时长，需要 `better-scroll: true` | 非 | Number |  | 300 |

**示例**

``` vue
<template>
  <d2-container ref="container">
    <el-button @click="$refs.container.scrollBy(0, 30)">
      向下滚动 30 像素
    </el-button>
  </d2-container>
</template>
```

如果使用了滚动优化模式：

``` vue
<template>
  <d2-container ref="container" better-scroll>
    <el-button @click="$refs.container.scrollBy(0, 30, 300)">
      向下滚动 30 像素 | 动画时长 300 ms
    </el-button>
  </d2-container>
</template>
```

### scrollTo

**介绍**

滚动到指定位置

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| x | 横向距离 | 必选 | Number |  | 0 |
| y | 纵向距离 | 必选 | Number |  | 0 |
| time | 动画时长，需要 `better-scroll: true` | 非 | Number |  | 300 |

**示例**

``` vue
<template>
  <d2-container ref="container">
    <el-button @click="$refs.container.scrollTo(0, 30)">
      滚动到(0, 30)像素位置
    </el-button>
  </d2-container>
</template>
```

如果使用了滚动优化模式：

``` vue
<template>
  <d2-container ref="container" better-scroll>
    <el-button @click="$refs.container.scrollTo(0, 30, 300)">
      滚动到(0, 30)像素位置 | 动画时长 300 ms
    </el-button>
  </d2-container>
</template>
```

### scrollTop

**介绍**

垂直方向滚动到指定位置

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| top | 横向距离 | 必选 | Number |  | 0 |
| time | 动画时长，需要 `better-scroll: true` | 非 | Number |  | 300 |

**示例**

``` vue
<template>
  <d2-container ref="container">
    <el-button @click="$refs.container.scrollTop(100)">
      滚动到距离顶部 100 像素位置
    </el-button>
  </d2-container>
</template>
```

如果使用了滚动优化模式：

``` vue
<template>
  <d2-container ref="container" better-scroll>
    <el-button @click="$refs.container.scrollTop(100, 300)">
      滚动到距离顶部 100 像素位置 | 动画时长 300 ms
    </el-button>
  </d2-container>
</template>
```

## 如何选择

如果不是纯展示型页面，通常建议不要开启 better-scroll 属性，除非你可以通过设置 better-scroll-options 解决你遇到的问题

::: tip 开启 better-scroll 属性可能会带来的问题
* 页面文字无法选中
* 表单控件失灵
* 拖拽相关操作失灵
* ...

上述问题理论上都可以通过配置 better-scroll-options 解决，better-scroll-options 参数设置的对象在和默认值合并后会作为 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 配置参数传入。D2Admin 暂时只对 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 做了简单设置，如果你遇到了相关问题请 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 相关设置文档
:::