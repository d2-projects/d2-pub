<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',
  components: { SidebarLinks, NavLinks },
  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  user-select none
  background-color $sidebarBgColor !important
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  // 第一层的菜单
  & > .sidebar-links
    padding 1.5rem 0 1.5rem 1.5rem
    // 第一层菜单中 没有子菜单 直接显示的链接
    & > li > a.sidebar-link
      // 应该和 .sidebar-heading 一致
      font-size 1em
      line-height 1.7
      font-weight 500
    // 第一层菜单中 非第一个项目
    & > li:not(:first-child)
      // margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
