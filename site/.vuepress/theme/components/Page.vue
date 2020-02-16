<template>
  <main class="page">
    <slot name="top"/>
    <Content class="theme-default-content"/>
    <PageEdit/>
    <PageNav v-bind="{ sidebarItems }"/>
    <slot name="bottom"/>
  </main>
</template>

<script>
import PageEdit from './PageEdit.vue'
import PageNav from './PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page
  padding-bottom 2rem
  display block
  // 移除外部链接的右上角图标
  .icon.outbound {
    display: none;
  }
</style>
