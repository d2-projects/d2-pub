<template>
  <div class="page-nav" v-if="prev || next">
    <div flex="main:justify cross:center box:mean">
      <router-link v-if="prev" :to="prev.path">
        <div class="page-nav-button prev" flex="main:justify cross:center">
          <svg
            class="page-nav-button--arrow"
            preserveaspectratio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor">
            <g>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </g>
          </svg>
          <div>
            <div class="page-nav-button--type">Previous</div>
            <div class="page-nav-button--title">{{ prev.title || prev.path }}</div>
          </div>
        </div>
      </router-link>
      <span v-else></span>
      <router-link v-if="next" :to="next.path">
        <div class="page-nav-button next" flex="main:justify cross:center">
          <div>
            <div class="page-nav-button--type">Next</div>
            <div class="page-nav-button--title">{{ next.title || next.path }}</div>
          </div>
          <svg
            class="page-nav-button--arrow"
            preserveaspectratio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor">
            <g>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </g>
          </svg>
        </div>
      </router-link>
      <span v-else></span>
    </div>
  </div>
</template>

<script>
import { resolvePage } from '@vuepress/theme-default/util/index.js'
import { isString, isNil } from 'lodash'

export default {
  name: 'PageNav',
  props: ['sidebarItems'],
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },
    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  }
}
function resolvePrev (page, items) {
  return find(page, items, -1)
}
function resolveNext (page, items) {
  return find(page, items, 1)
}
const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}
function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType
  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)
  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)
  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig
  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}
function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}
function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page-nav
  @extend $wrapper
  user-select none
  padding-top 1rem
  padding-bottom 0
  a {
    max-width 50%
  }
  .page-nav-button
    padding 1.3rem 1.2rem
    border-radius 2px
    border: 1px solid $borderColor
    box-shadow 0 3px 8px 0 rgba(116, 129, 141, 0.1)
    cursor pointer
    transition border-color .3s
    color: $textColor
    &:hover
      border-color $accentColor
      .page-nav-button--arrow
        color: $accentColor
      .page-nav-button--title
        color: $accentColor
    &:first-child
      margin-right 10px
    &.prev
      text-align right
    .page-nav-button--type
      font-size 0.6rem
      line-height 0.6rem
      font-weight 400
      color $textInfoColor
      margin-bottom 0.5rem
    .page-nav-button--title
      font-size 1rem
      line-height 1rem
      font-weight 600
    .page-nav-button--arrow
      color $textInfoColor
      height 1.5rem
      width 1.5rem
</style>
