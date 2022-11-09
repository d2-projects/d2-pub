# 异步请求

D2Admin 使用 [axios](https://github.com/axios/axios) 作为异步请求工具，并做了一些封装。

| axios | 地址 |
| --- | --- |
| Github | [https://github.com/axios/axios](https://github.com/axios/axios) |
| npm | [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios) |
| 中文文档 | [https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845) |

## 介绍

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

* 支持浏览器和node.js
* 支持promise
* 能拦截请求和响应
* 能转换请求和响应数据
* 能取消请求
* 自动转换JSON数据
* 浏览器端支持防止CSRF(跨站请求伪造)

## 使用方式

axios 默认的使用方式在这里不做介绍，D2Admin 推荐在您的项目中使用下面的方式获取数据：

### 配置接口地址

默认的请求地址在 `.env`

```
VUE_APP_API=/api/
```

上述设置将在您访问 `foo` 时实际去访问 `/api/foo`

#### 环境区分

如果您希望不同的环境使用不同的请求地址，可以在 `.env.development` 中添加设置（示例）：

```
VUE_APP_API=/api-dev/
```

这样您在开发环境和正式环境就有了不同的公共请求地址，在开发环境访问 `foo` 时实际去访问 `/api-dev/foo`

::: tip 详情参考
[Vue CLI 3 | 环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)
:::

#### 示例

假设有一登录接口：

* 开发环境 `http://127.0.0.1:8080/api/login`
* 生产环境 `http://127.0.0.1:3000/login`

配置：

* .env.development `VUE_APP_API=http://127.0.0.1:8080/api/`
* .env `VUE_APP_API=http://127.0.0.1:3000/`

网络请求：

``` js
request({
  url: 'login',
  method: 'post',
  data: {
    username: '',
    password: ''
  }
})
```

即可实现在不同环境下访问不同的接口位置。

### 响应拦截

您在开始使用 D2Admin 开发您的项目之前，应该首先修改 `d2-admin/src/api/service.js` 下的响应拦截器设置。

#### 默认约定

默认设置下 response.data 的数据格式应为如下所示：

``` js
{
  // 接口约定的状态码 非 http 状态码
  code: 0,
  // 接口返回请求状态信息
  msg: '返回信息',
  // data 内才是真正的返回数据
  data: {
    list: [
      ...
    ]
  }
}
```

在响应拦截器中会对 http 状态码以及 `response.data.code` 进行判断，如果全部为正常将会返回 `response.data.data`，如果有错误将会触发日志记录和信息显示，如果是登录状态失效将自动清空本地的登录状态并退回到登录页面。所有的判断逻辑请您根据实际业务需要自行修改。

``` js
{
  list: [
    ...
  ]
}
```

### 设计 API

自 [v1.11.0](https://github.com/d2-projects/d2-admin/releases/tag/v1.11.0) 开始，D2Admin 开始使用一个同类项目中不多见的（在当时看来）方式配置接口，放弃使用 mock.js 模拟网络请求。

src/api 目录示例：

```
├─modules ---------- // 按功能模块划分成组的接口配置
│ ├─goods.api.js
│ ├─sys.role.api.js
│ └─sys.user.api.js
├─index.js --------- // 入口
├─service.js ------- // 请求实例设置
└─tools.js --------- // 相关工具函数
```

#### index.js

此文件作为网络请求配置的入口文件，作用是集中注册 modules 文件夹中的配置文件。

#### service.js

此文件为请求实例的配置，默认导出了两套请求实例（请根据实际业务需要合理添加）和一个 `mock` 方法：

* 用于真实网络请求的实例和请求方 `service` `request`
* 用于模拟网络请求的实例和请求方法 `serviceForMock` `requestForMock`
* 网络请求数据模拟工具 `mock`

这些方法都会被传入 modules 目录中的每一个接口配置中，使用方式详见下文介绍。

#### modules

modules 内任所有的 *.api.js 文件都会被调用，每个文件应该默认导出一个方法，这个方法接收一个对象作为参数，index.js 会将通用的方法通过此对象传递给每一个 module。

::: tip 附注
* 较旧版本只扫描 modules 目录下第一级目录 <Badge text="1.19.0" type="warning"/>
* 在 modules 文件夹内扫描 *.api.js 而不是 *.js 的好处是这样允许您在 modules 文件夹内放置某些非接口配置的 js 文件，较旧的版本会识别所有的 js 文件 <Badge text="1.20.0" type="warning"/>
:::

参数对象默认情况下的结构：

``` js
{
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools
}
```

其中包含了上文提到的 service.js 导出的两组网络请求工具实例和对应的请求方法、模拟请求的配置函数，另外还有用于生成模拟数据的 `faker` 方法以及实用工具 `tools`。借助这些方法，您可以在每一个 module 中设置多个网络请求配置。

配置示例：

``` js
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 方法名称
   * @param {Object} data 请求携带的信息
   */
  DEMO_FETCH (data = {}) {
    // 模拟数据
    mock
      .onAny('demo')
      .reply(config => {
        // 您可以这样在拦截请求时获取携带的数据
        const data = tools.parse(config.data)
        // 模拟正确的返回 并使用 faker 生成假数据
        return tools.responseSuccess({ id: faker.random.uuid() })
        // 模拟失败的返回
        // return tools.responseError({}, '错误信息')
      })
    // 接口请求
    // 如果这个接口不需要模拟了，请使用 request 代替 requestForMock
    return requestForMock({
      url: 'demo',
      method: 'post',
      data
    })
  }
})
```

使用：

在 vue 组件中

``` js
{
  methods: {
    async getTableData () {
      try {
        const res = await this.$api.DEMO_FETCH()
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
```

在任意 .js 文件中

``` js
import api from '@/api'
api.DEMO_FETCH()
```

::: tip
您也可以参照 [d2-projects/d2-admin-xiya-go-cms](https://github.com/d2-projects/d2-admin-xiya-go-cms) 项目，将 `api` 传入 store 中每个模块的生成方法中，省去在 store 模块中的 api import。
:::

建议将一组接口写入一个配置文件，例如商品的增删改查：

``` js
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  GOODS_ADD (data) {...},
  GOODS_REMOVE (id) {...},
  GOODS_EDIT (data) {...},
  GOODS_QUERY (query) {...},
})
```

::: tip 更详细的文档参考
* faker [https://github.com/Marak/faker.js](https://github.com/Marak/faker.js)
* axios-mock-adapter [https://github.com/ctimmerm/axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
:::

## 跨域问题

如果您的前端项目和后端接口发生跨域，可以在本地配置代理：

``` js
devServer: {
  proxy: {
    '/api': {
      target: 'http://47.100.186.132/your-path/api',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
```

上述配置的结果是在请求 `/api/login` 时转发到 `http://47.100.186.132/your-path/api/login`。

::: tip 详细的代理配置
[Vue CLI 3 | devServer.proxy](https://cli.vuejs.org../config/#devserver-proxy)
:::
