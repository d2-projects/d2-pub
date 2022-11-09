# 事件

## select

* 说明: 当用户手动勾选数据行的 Checkbox 时触发的事件
* 参数: selection, row

## select-all

* 说明: 当用户手动勾选全选 Checkbox 时触发的事件
* 参数: selection

## selection-change

* 说明: 当选择项发生变化时会触发该事件
* 参数: selection

## current-change

* 说明: 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开 options 中的 highlight-current-row 属性
* 参数: currentRow, oldCurrentRow

## cell-mouse-enter

* 说明: 当单元格 hover 进入时会触发该事件
* 参数: row, column, cell, event

## cell-mouse-leave

* 说明: 当单元格 hover 退出时会触发该事件
* 参数: row, column, cell, event

## cell-click

* 说明: 当某个单元格被点击时会触发该事件
* 参数: row, column, cell, event

## cell-dblclick

* 说明: 当某个单元格被双击击时会触发该事件
* 参数: row, column, cell, event

## row-click

* 说明: 当某一行被点击时会触发该事件
* 参数: row, event, column

## row-contextmenu

* 说明: 当某一行被鼠标右键点击时会触发该事件
* 参数: row, event

## row-dblclick

* 说明: 当某一行被双击时会触发该事件
* 参数: row, event

## header-click

* 说明: 当某一列的表头被点击时会触发该事件
* 参数: column, event

## header-contextmenu

* 说明: 当某一列的表头被鼠标右键点击时触发该事件
* 参数: column, event

## sort-change

* 说明: 当表格的排序条件发生变化的时候会触发该事件
* 参数: { column, prop, order }

## filter-change

* 说明: 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
* 参数: filters

## row-add

* 说明: 当表格新增数据的时候会触发该事件
* 参数: row, done

## row-edit

* 说明: 当表格修改数据的时候会触发该事件
* 参数: index, row, done

## dialog-cancel

* 说明: 当表格取消新增或修改数据的时候会触发该事件
* 参数: done

## row-remove

* 说明: 当表格删除数据的时候会触发该事件
* 参数: index, row, done

## pagination-size-change

* 说明: 当分页 pageSize 改变时会触发
* 参数: pageSize

## pagination-current-change

* 说明: 当分页 currentPage 改变时会触发
* 参数: currentPage

## pagination-prev-click

* 说明: 当分页上一页按钮被用户点击改变当前页后触发
* 参数: currentPage

## pagination-next-click

* 说明: 当分页下一页按钮被用户点击改变当前页后触发
* 参数: currentPage
