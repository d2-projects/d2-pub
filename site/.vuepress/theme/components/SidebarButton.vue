<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg>
  </div>
</template>

<style lang="stylus">
$sidebar-button-height = 1.25rem
$sidebar-button-width = 1.25rem
$sidebar-button-padding = 0.6rem
.sidebar-button
  cursor pointer
  display none
  width $sidebar-button-width
  height $sidebar-button-height
  position absolute
  padding $sidebar-button-padding
  top ($navbarHeight - ($sidebar-button-height + $sidebar-button-padding * 2)) * 0.5
  left 1rem
  .icon
    display block
    width $sidebar-button-width
    height $sidebar-button-height

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
