# react-study
react框架的学习记录
2024.06.14 重新梳理。

# 一、react概述
[官网:](https://reactjs.org)
React: 它是一个用于构建 Web 和原生交互界面的JavaScript 库。跟vue类似React也是渐进式的、也可以被逐步采用的即可以按需引入需要的功能模块。

react目前是16、18两个大版本会有区别、不过也是增量更新并没有说改变很大。

# 二、react-basic-study
react基础语法的学习、这里我们依然不使用任何构建工具。
基础引入需要3个包就可以在本地进行开发、可以cdn引入也可以下载到本地。
这种只适合学习、实际生产是不会使用这种方法的。

```js

// 1. react的核心库、会暴露 React类、提供了创建 react元素\组件的方法。- React.createElement()
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// 2. react的渲染器、会暴露 ReactDOM类、提供操作虚拟DOM的方法、用于将react元素\组件渲染到页面上。
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// 3. js的编译器、将jsx语法编译成js语法。
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// 3. js的编译器、将jsx语法编译成js语法。

```

[1.react概述和基本使用](react-basic-study/react-1.react概述和基本使用.html)

[2.JSX语法](react-basic-study/react-2.JSX语法.html)

[3.react元素](react-basic-study/react-3.react元素.html)

[4.react组件基础](react-basic-study/react-4.react组件基础.html)

[5.条件渲染](react-basic-study/react-5.条件渲染.html)

[6.列表渲染](react-basic-study/react-6.列表渲染.html)

[7.事件绑定](react-basic-study/react-7.事件绑定.html)

[8.组件state和生命周期](react-basic-study/react-8.组件state和生命周期.html)

[9.Reducer](react-basic-study/react-9.Reducer.html)

[10.react表单](react-basic-study/react-10.react表单.html)

[11.获取DOM对象](react-basic-study/react-11.获取DOM对象.html)

[12.Effect](react-basic-study/react-12.Effect.html)

[13.Hooks](react-basic-study/react-13.Hooks.html)



# 三、react-manual-study

使用npm 手动创建 react 项目学习、先要安装3个包 react、react-dom、react-scripts(提供了webpack等功能)

```bash

# 初始化项目
$ npm init -y 
# 安装需要依赖
$ npm i  react react-dom react-scripts 
# 安装 typescript 相关的类型定义包
$ npm install @types/react @types/react-dom typescript
# 就可以使用本项目内的依赖包打包项目。
$ npx react-scripts build 
# 实时运行
$ npx react-scripts start 
# 也可以把命令写到 package.json 文件中的scripts选项里。
"scripts": 
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "react-scripts start",
    "build": "react-scripts build"

```

设置代码格式化、在项目根目录创建 .eslintrc.json 文件并配置如下内容。

```bash
# eslint-config-react-app 是一个由 Create React App 使用的共享 ESLint 配置包、它包含了一套预设的 React 相关的 ESLint 规则。
$ npm install --save-dev eslint-config-react-app eslint@^8.0.0
# eslint-plugin-react 扩展了ESLint 使其能够理解 React 的 JSX 语法
# eslint-plugin-react-hooks 主要关注于 React Hooks 的正确使用。
$ npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev
```
```js
// .eslintrc.json
{
    "env": {
      "browser": true,
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 2023,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "extends": "react-app",
    "plugins": [
      "react",
      "react-hooks"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off", // React 17及以上版本不需要import React from 'react'
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "react-hooks/rules-of-hooks": "error", // 检查Hook的规则
      "react-hooks/exhaustive-deps": "warn", // 检查effect的依赖项是否完整
      "react/jsx-indent": ["error", 2], // JSX缩进为2个空格
      "react/jsx-indent-props": ["error", 2], // JSX属性缩进为2个空格
      "react/jsx-curly-spacing": ["error", "always"], // 大括号内需要有空格
      "react/jsx-key": "error", // 确保数组中的元素有key属性
      "react/no-unescaped-entities": "error", // 禁止在JSX字符串中使用未转义的字符
      "react/self-closing-comp": "error", // 鼓励自闭合组件
      "react/jsx-max-props-per-line": ["error", { "maximum": 1 }], // 每行最大属性数
      "react/jsx-first-prop-new-line": ["error", "multiline"] // 多行JSX元素的第一个属性独占一行
    }
  }
```

创建项目目录结构如下:
```js
项目名(文件名)
+-- dist[目录]                      // 编译后的目录、用于预览项目
+-- public[目录]                    // 公共静态资源
+-- node_modules[目录]              // 项目使用的包目录、开发使用和上线使用的都在里边
+-- src[目录]                       // 源文件/代码、程序员主要编写的目录
|  +-- component[目录]              // 公共组件文件
|  +-- utils[目录]                  // 工具类
|  +-- views[目录]                  // 页面
|  +-- index.js                    // 项目的入口文件、里边包括项目的主模块和监听端口号
+-- .eslintrc.json                  // ESlint的配置文件
+-- package-lock.json              // 防止由于包不同、导致项目无法启动的配置文件、固定包版本
+-- package.json                   // 项目依赖包管理文件和Script文件、比如如何启动项目的命令

```

## 3.1 react 路由学习
React 路由通常使用 react-router 库来实现、它是一个功能强大的库、用于在 React 应用程序中实现路由。在浏览器环境中实现路由的包是react-router-dom。

安装路由: `$ npm install react-router-dom`



在react-router-dom中有四种配置路由的方式、分别是BrowseRouter、MemeoryRouter、StaticRouter、HashRouter、一般我们基本使用的都是 BrowseRouter、HashRouter。

比如我们使用 BrowseRouter、如下。

```js
// 创建路由并导出
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',//路由的路径、可以是字符串或者正则表达式。
    element: <div>首页</div>// element: 路由渲染的组件。Router5.x 中使用component属性、6.x不支持该属性。
  },
  {
    path: '/login',
    element: <div>登录页</div>
  }
])

// 导出
export default router

// 入口文件
// 引入严格模式
import { StrictMode } from 'react';
// 引入 createRoot - react18之后拆分了
import { createRoot } from 'react-dom/client'
// 引入路由提供者用于绑定路由配置 
import { RouterProvider } from 'react-router-dom'
// 引入路由配置
import router from'./router'

// 获取根元素
const root = createRoot(document.getElementById('root'))
// 挂载App渲染根元素下
root.render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)

```

### 1、路由导航
路由的跳转有两种方式、一种是编程式导航、一种是声明式导航。

1. 声明式导航
```js

说明：声明式导航是指在模板中通过<Link/>组件的to属性描述要跳转到哪里、最终是渲染成a标签。
语法：
import { Link } from "react-router-dom"
<Link to=''/article''>跳转</Link>


```

2. 编程式导航
```js
说明：编程式导航是指通过‘useNavigate’钩子得到导航方法、然后通过调用方法以命令的形式进行路由跳转

语法：
const navigate = uaeNavigate() 
navigate('/article')

```

### 2、路由传参
和vue一样的、不过react中不是使用组件就是使用hook代替。
查询字符串传参使用 useSearchParams() 钩子获取
动态路由使用 useParams() 钩子获取


```js
searchParams传参、传参依然是通过查询字符串传递、关键在于如何获取传递的参数
<div>   
   <button onClick={()=>navigate('/article?id=1001&name=jack哈啊哈')}>传参</button>
</div>   
import { useSearchParams  } from 'react-router-dom'
// 获取路由参数
const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const name = searchParams.get('name')
动态路由传参
  {
    path : '/category/:id/:name', //添加参数占位符
    element : <Category />
  }
import { useParams  } from 'react-router-dom'
// 获取路由参数
const params = useParams()
const id = params.id
const name = params.name


```

### 3、嵌套路由
也是通过children属性配置路由嵌套关系、使用&lg;Outlet/&gt;组件配置二级路由渲染位置(也就是路由出口)


```js
const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children :[{
             index:true, //加index:true、默认二级路由
            path : '/board',
            element : <Board></Board>
        },
        {
            path : '/about',
            element : <About></About>
        }]
    },
    {
        path : '/login',
        element : <Login></Login>
    },
    {
        path : '/article/:id/:name',
        element : <Article></Article>
    }
])
import { Link,Outlet } from "react-router-dom"
<Link to='/board'> 面板</Link>
<Link to='/about'> 关于</Link>
<h3>下面是嵌套路由出口</h3>
<Outlet />

```


## 3.2 redux相关学习

### 1、Redux核心库
Redux 是 JavaScript 状态容器，提供可预测化的状态管理。它是一个专门用来做状态管理的js库（不是react插件）作用：集中式管理react应用中的多个组件共享的状态。Redux 是一个使用叫做 “action” 的事件来管理和更新应用状态的模式和工具库 它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

使用情况：
1. 应用中有很多 state 在多个组件中需要使用（共享）
2. 一个组件需要改变另一个组件的状态（通信）
3. 总体原则：能不用就不用，如果不用比较吃力才用

安装Redux 核心库：`npm install redux`、Redux 是一个小型的独立 JS 库。 但是，它通常与其他几个包一起使用，以帮助管理 React 应用程序中的状态。Redux 可以集成到任何的 UI 框架中，其中最常见的是 React。
所以有对应专门的包React-Redux、

**State 管理**
state：驱动应用的真实数据源头
view：基于当前状态的视图声明性描述
actions：根据用户输入在应用程序中发生的事件，并触发状态更新

单向数据流（one-way data flow）
 用 state 来描述应用程序在特定时间点的状况
 基于 state 来渲染出 View
 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新，生成新的 state
 基于新的 state 重新渲染 View

然而，当我们有多个组件需要共享和使用相同 state时，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。解决这个问题的一种方法是从组件中提取共享 state，并将其放入组件树之外的一个集中位置。
通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。
这就是 Redux 背后的基本思想：应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。

**Action**
action 是一个具有 type 字段的普通 JavaScript 对象。你可以将 action 视为描述应用程序中发生了什么的事件.type 字段是一个字符串，给这个 action 一个描述性的名字，比如"todos/todoAdded"。我们通常把那个类型的字符串写成“域/事件名称”，其中第一部分是这个 action 所属的特征或类别，第二部分是发生的具体事情。
Action Creator
action creator 是一个创建并返回一个 action 对象的函数。它的作用是让你不必每次都手动编写 action 对象.
```js
// 一个典型的 action 对象
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

**Reducer**




```js
function Counter() {
  // State: counter 值
  const [counter, setCounter] = useState(0);

  // Action: 当事件发生后，触发状态更新的代码
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: 视图定义
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}
```


### 2、React-Redux
安装：`npm install react-redux`


### 3、Redux Toolkit
Redux Toolkit 是 Redux 的官方推荐工具包，它简化了编写 Redux 逻辑和设置 store 的过程。
安装：`npm install @reduxjs/toolkit`

### 4、Redux DevTools
Redux DevTools 扩展 可以显示 Redux 存储中状态随时间变化的历史记录。这允许你有效地调试应用程序，包括使用强大的技术，如“时间旅行调试”。

# 四、react-createApp-study
项目实战
使用 create-react-app 工具、用于创建react的单页面应用。

集成typescript、在项目中添加 @types/react 和 @types/react-dom 即可获得完整的 React Web 支持。

```js
$ npm install @types/react @types/react-dom

// 然后在 tsconfig.json 中设置以下编译器选项:

```

# 五、react-vite-study
使用vite 










