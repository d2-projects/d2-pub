# 使用指南

## 获取表格当前数据

可以通过 `ref` 拿到表格实时数据。
``` vue
<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [],
      data: []
    }
  },
  mounted () {
    console.log(this.$refs.d2Crud.d2CrudData) // 获取表格数据
  }
}
</script>
```

## 设置默认尺寸

在 `main.js` 使用 `D2Crud` 时传入 `size` 即可（可选值: `medium` `small` `mini`）
``` js
Vue.use(d2Crud, { size: 'small' })
```