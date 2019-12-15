# d2-ueditor

此组件基于 [vue-ueditor-wrap](https://github.com/HaoChuan9421/vue-ueditor-wrap)，默认只对外提供一个 `v-model` 的使用方式，自定义编辑器的各种属性请在 [src/components/d2-ueditor](https://github.com/d2-projects/d2-admin/tree/master/src/components/d2-ueditor) 统一封装。

使用方式

``` vue
<template>
  <d2-container>
    <d2-ueditor v-model="text"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      text: '<p>Hello World</p>'
    }
  }
}
</script>
```

详细介绍和用法见 [vue-ueditor-wrap](https://github.com/HaoChuan9421/vue-ueditor-wrap)。