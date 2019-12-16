# 时间日期相关过滤器

时间日期相关过滤器插件，将 [dayjs](https://github.com/iamkun/dayjs) 中可能会当做过滤器使用的方法包装为 vue 过滤器，安装后可以在项目中直接使用大量 dayjs 的 API 作为过滤器处理时间和日期的显示。

::: tip
新的包名为 [@d2-admin/filters-dayjs](https://www.npmjs.com/package/@d2-admin/filters-dayjs) 原 [@d2-projects/vue-filters-date](https://www.npmjs.com/package/@d2-projects/vue-filters-date) 已经停止维护，请检查您的包名
:::

## 安装

``` sh
npm i @d2-admin/filters-dayjs --save
```

## 安装插件

``` js
import Vue from 'vue'
import d2VueFiltersDayjs from '@d2-admin/filters-dayjs'
Vue.use(d2VueFiltersDayjs)
```

## API

附：

下面文档中的 `P` 函数：

``` js
const P = Day => {
  return new Proxy(Day, {
    get (target, key) {
      if (dayjs.isDayjs(target)) {
        return target[key]
      } else {
        if (dayjs(target).isValid()) {
          return dayjs(target)[key]
        } else {
          return function () {
            return '无效日期'
          }
        }
      }
    },
    set (target, key, value) {
      target[key] = value
    }
  })
}
```

`P` 函数返回一个代理的对象，当访问这个对象上的方法时，如果该对象是 dayjs 对象，将正常返回此方法的返回结果；如果该对象不是 dayjs 对象，将首先试图将此对象转换为 dayjs 对象，然后返回相应方法，如果转换失败，将返回错误信息。

### 解析

#### day

解析为 dayjs 格式的对象。

等效于：

``` js
value => dayjs(value)
```

#### date_unix

解析为 dayjs 格式的对象。

等效于：

``` js
value => dayjs.unix(value)
```

### 获取

#### date_year

获取年份。

等效于：

``` js
Day => P(Day).year()
```

使用示例：

``` html
<p>{{value|date_year}}</p>
```

#### date_month

获取月份。

等效于：

``` js
Day => P(Day).month()
```

使用示例：

``` html
<p>{{value|date_month}}</p>
```

#### date_date

获取日期。

等效于：

``` js
Day => P(Day).date()
```

使用示例：

``` html
<p>{{value|date_date}}</p>
```

#### date_day

获取星期几。

等效于：

``` js
Day => P(Day).day()
```

使用示例：

``` html
<p>{{value|date_day}}</p>
```

#### date_hour

获取小时。

等效于：

``` js
Day => P(Day).hour()
```

使用示例：

``` html
<p>{{value|date_hour}}</p>
```

#### date_minute

获取分钟。

等效于：

``` js
Day => P(Day).minute()
```

使用示例：

``` html
<p>{{value|date_minute}}</p>
```

#### date_second

获取秒。

等效于：

``` js
Day => P(Day).second()
```

使用示例：

``` html
<p>{{value|date_second}}</p>
```

#### date_millisecond

获取毫秒。

等效于：

``` js
Day => P(Day).millisecond()
```

使用示例：

``` html
<p>{{value|date_millisecond}}</p>
```

### 设置

#### date_set

设置一个日期，传递给下一步。对大小写不敏感。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

* **value**

设置的值。

等效于：

``` js
(Day, unit, value) => P(Day).set(unit, value)
```

使用示例：

``` html
<p>{{value|date_set('year', 2020)}}</p>
```

### 操作

#### date_add

增加指定的时间。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **value**

增加的值。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, value, unit) => P(Day).add(value, unit)
```

使用示例：

``` html
<p>{{value|date_add(1, 'year')}}</p>
```

#### date_subtract

减少指定的时间。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **value**

减少的值。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, value, unit) => P(Day).subtract(value, unit)
```

使用示例：

``` html
<p>{{value|date_subtract(1, 'year')}}</p>
```

#### date_startof

设置为传入日期的开头时间。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, unit) => P(Day).startOf(unit)
```

使用示例：

``` html
<p>{{value|date_startof('year')}}</p>
```

#### date_endof

设置为传入日期的末尾时间。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, unit) => P(Day).endOf(unit)
```

使用示例：

``` html
<p>{{value|date_endof('year')}}</p>
```

### 显示

#### date_format

格式化显示。

等效于：

``` js
(Day, setting = 'YYYY-MM-DD HH:mm:ss') => P(Day).format(setting)
```

使用示例：

``` html
<p>{{value|date_format('YY-MM-DD')}}</p>
```

#### date_diff

计算两个时间差。

等效于：

``` js
(Day, Day2 = '', unit = 'millisecond', accurate = false) => P(Day).diff(dayjs(Day2) unit, accurate)
```

使用示例：

``` html
<p>{{value|date_diff('2012-10-31', 'year')}}</p>
```

#### date_value_millisecond

获取Unix 时间戳 (毫秒)。

等效于：

``` js
Day => P(Day).valueOf()
```

使用示例：

``` html
<p>{{value|date_value_millisecond}}</p>
```

#### date_value_second

获取Unix 时间戳 (秒)。

等效于：

``` js
Day => P(Day).unix()
```

使用示例：

``` html
<p>{{value|date_value_second}}</p>
```

#### date_days_in_month

获取月份的天数。

等效于：

``` js
Day => P(Day).daysInMonth()
```

使用示例：

``` html
<p>{{value|date_days_in_month}}</p>
```

#### date_to_date

转换为 Date 对象。

等效于：

``` js
Day => P(Day).toDate()
```

使用示例：

``` html
<p>{{value|date_to_date}}</p>
```

#### date_to_array

转换为数组。

等效于：

``` js
Day => P(Day).toArray()
```

使用示例：

``` html
<p>{{value|date_to_array}}</p>
```

#### date_to_json

转换为 JSON。

等效于：

``` js
Day => P(Day).toJSON()
```

使用示例：

``` html
<p>{{value|date_to_json}}</p>
```

#### date_to_iso

转换为 ISO8601 格式。

等效于：

``` js
Day => P(Day).toISOString()
```

使用示例：

``` html
<p>{{value|date_to_iso}}</p>
```

#### date_to_object

转换为对象。

等效于：

``` js
Day => P(Day).toObject()
```

使用示例：

``` html
<p>{{value|date_to_object}}</p>
```

#### date_to_string

转换为字符。

等效于：

``` js
Day => P(Day).toString()
```

使用示例：

``` html
<p>{{value|date_to_string}}</p>
```

### 查询

#### date_is_before

是否之前。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **Day2**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, Day2, unit = 'millisecond') => P(Day).isBefore(dayjs(Day2), unit),
```

使用示例：

``` html
<p>{{value|date_is_before('2020-1-1')}}</p>
```

#### date_is_after

是否之后。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **Day2**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, Day2, unit = 'millisecond') => P(Day).isAfter(dayjs(Day2), unit),
```

使用示例：

``` html
<p>{{value|date_is_after('2012-1-1')}}</p>
```

#### date_is_same

是否相同。

参数：

* **Day**

dayjs 对象或者 dayjs 可解析的格式。

* **Day2**

dayjs 对象或者 dayjs 可解析的格式。

* **unit**

date / day / month / year / hour / minute / second / millisecond

等效于：

``` js
(Day, Day2, unit = 'millisecond') => P(Day).isSame(dayjs(Day2), unit)
```

使用示例：

``` html
<p>{{value|date_is_same(new Date())}}</p>
<p>{{value|date_is_same(new Date(), 'date')}}</p>
```

::: tip 源代码
[d2-projects/vue-filters-date](https://github.com/d2-projects/vue-filters-date)
:::
