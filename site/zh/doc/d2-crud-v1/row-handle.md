# 配置: row-handle

## columnHeader

* 说明: 操作列表头文字
* 类型: String
* 可选值: 无
* 默认值: 操作

## width

* 说明: 操作列宽度
* 类型: String
* 可选值: 无
* 默认值: 无

## minWidth

* 说明: 操作列最小宽度
* 类型: String
* 可选值: 无
* 默认值: 无

## fixed

* 说明: 操作列固定列
* 类型: String / Boolean
* 可选值: true / left / right
* 默认值: 无

## align

* 说明: 操作列对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: left

## renderHeader

* 说明: 操作列 Label 区域渲染使用的 Function
* 类型: Function (h, { column, $index })
* 可选值: 无
* 默认值: 无

## edit

* 说明: 编辑模式
* 类型: Object
* 可选值: 无
* 默认值: 无

## edit.text

* 说明: 编辑按钮文字
* 类型: String
* 可选值: 无
* 默认值: 无

## edit.size

* 说明: 编辑按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

## edit.type

* 说明: 编辑按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

## edit.icon

* 说明: 编辑按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

## edit.show

* 说明: 控制是否显示编辑按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: true

## edit.disabled

* 说明: 控制是否禁用编辑按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: false

## remove

* 说明: 删除模式
* 类型: Object
* 可选值: 无
* 默认值: 无

## remove.text

* 说明: 删除按钮文字
* 类型: String
* 可选值: 无
* 默认值: 无

## remove.confirmTitle

* 说明: 删除confirm框的标题
* 类型: String
* 可选值: 无
* 默认值: 无

## remove.confirmText

* 说明: 删除confirm框的文字
* 类型: String
* 可选值: 无
* 默认值: 无

## remove.size

* 说明: 删除按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

## remove.type

* 说明: 删除按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

## remove.icon

* 说明: 删除按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

## remove.show

* 说明: 控制是否显示删除按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: true

## remove.disabled

* 说明: 控制是否禁用删除按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: false

## custom

* 说明: 自定义按钮
* 类型: Object
* 可选值: 无
* 默认值: 无

## custom.emit

* 说明: 自定义按钮监听的事件
* 类型: String
* 可选值: 无
* 默认值: 无

## custom.text

* 说明: 自定义按钮文字
* 类型: String
* 可选值: 无
* 默认值: 无

## custom.size

* 说明: 自定义按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

## custom.type

* 说明: 自定义按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

## custom.icon

* 说明: 自定义按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

## custom.show

* 说明: 控制是否显示自定义按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: true

## custom.disabled

* 说明: 控制是否禁用自定义按钮，类型为 `Function` 时，返回值只能为 `true` 或 `false`
* 类型: Boolean / Function (index, row)
* 可选值: 无
* 默认值: false
