# react-study
react框架的学习记录
2024.06.14 重新梳理。
2025.11.04 继续整理。

# 一、react概述
[官网:](https://reactjs.org)
[最新文档地址:](https://react.dev)，react18版本更新推出的全新文档地址。
React: 它是一个用于构建 Web 和原生交互界面的JavaScript 库。跟 vue 类似 React 也是渐进式的、也可以被逐步采用的即可以按需引入需要的功能模块。

react目前是16、18(之后)两个大版本会有区别、不过也是增量更新并没有说改变很大。

# 二、react-basic-study
react基础语法的学习、这里我们依然不使用任何构建工具。
基础引入需要3个包就可以在本地进行开发、可以cdn引入也可以下载到本地。
注意：这种只适合学习、实际生产是不会使用这种方法的。

**基本使用**
```js

// 1. react的核心库、会暴露 React类、提供了创建 react元素\组件的方法。- React.createElement()
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// 2. react的渲染器、会暴露 ReactDOM类、提供操作虚拟DOM的方法、用于将react元素\组件渲染到页面上。
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// 3. js的编译器、将jsx语法编译成js语法。
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// 4. 编写react代码。
<script type="text/babel">

</script>

```

**目录**
[1.react概述和基本使用](react-basic-study/react-1.react概述和基本使用.html)

[2.JSX语法](react-basic-study/react-2.JSX语法.html)

[3.react元素](react-basic-study/react-3.react元素.html)

[4.react组件基础](react-basic-study/react-4.react组件基础.html)

[5.条件渲染](react-basic-study/react-5.条件渲染.html)

[6.列表渲染](react-basic-study/react-6.列表渲染.html)

[7.事件绑定](react-basic-study/react-7.事件绑定.html)

[8.组件state和生命周期](react-basic-study/react-8.组件state和生命周期.html)

[9.Reducer](react-basic-study/react-9.Reducer.html)

[10.Context](react-basic-study/react-10.Context.html)

[11.获取DOM对象](react-basic-study/react-11.获取DOM对象.html)

[12.react表单](react-basic-study/react-12.react表单.html)

[13.Effect](react-basic-study/react-13.Effect.html)

[14.Hooks](react-basic-study/react-14.Hooks.html)

# 三、react-manual-study
使用npm手动创建react项目进行学习、包括react基础知识的运用、redux状态管理、客户端路由学习等。

## 3.1 基础配置

使用 npm 手动创建 react 项目学习、先要安装3个包 react、react-dom、react-scripts(提供了webpack等功能)

```bash

# 初始化项目
$ npm init -y 
# 安装需要依赖
$ npm i  react react-dom react-scripts 
# 如果是ts安装 typescript 相关的类型定义包
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

**创建.eslintrc.json文件**
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

**创建项目目录结构如下:**
```js
项目名(文件名)
+-- dist[目录]                      // 编译后的目录、用于预览项目
+-- public[目录]                    // 公共静态资源
+-- node_modules[目录]              // 项目使用的包目录、开发使用和上线使用的都在里边
+-- src[目录]                       // 源文件/代码、程序员主要编写的目录
|  +-- component[目录]              // 公共组件文件
|  +-- hooks[目录]                  // 自定义hooks
|  +-- router[目录]                 // 路由文件
|  +-- store[目录]                  // 状态管理
|  +-- utils[目录]                  // 工具类
|  +-- views[目录]                  // 页面
|  +-- index.js                    // 项目的入口文件、里边包括项目的主模块和监听端口号
+-- .eslintrc.json                  // ESlint的配置文件
+-- package-lock.json              // 防止由于包不同、导致项目无法启动的配置文件、固定包版本
+-- package.json                   // 项目依赖包管理文件和Script文件、比如如何启动项目的命令

```

## 3.2 react 路由学习

### 1. 概述
React 路由现在有三个大版本、分别是v5、v6、v7。我们直接学习最新的大版本即可。

React 路由通常使用 react-router 库来实现、它是用于在 React 应用程序中实现路由的一个功能强大的库、一个多策略路由器。
安装: `$ npm install react-router`

但是 react-router 只是一个核心库、它并没有包含具体的路由实现。
它有三种路由实现方式(或者说模式):
1. Declarative 声明式
2. Data 数据
3. Framework 框架
    
每种模式中可用的功能是递增的，因此从“声明式”到“数据”再到“框架”模式，只是在牺牲架构控制的情况下增加了更多功能。因此，根据您希望从 React Router 获得多少控制或多少帮助来选择您的模式。    

### 2. 路由实现

对于不同的环境（如浏览器、服务器等），我们需要使用不同的路由实现包。三种都需要安装路由: `$ npm i react-router`

而在浏览器环境中，我们通常使用 react-router-dom 包。它是对react-router的浏览器版本的封装、提供了一些额外的功能和组件。使用react-router一样的。

安装路由: `$ npm install react-router-dom`



在react-router-dom中有四种配置路由的方式、分别是
1. BrowseRouter、
2. MemeoryRouter、
3. StaticRouter、
4. HashRouter、

一般我们基本使用的都是 BrowseRouter、HashRouter。

**声明式路由例子**
```js
// 渲染一个BrowserRouter
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";

const root = createRoot(document.getElementById("root")) ;

root.render(
  <BrowserRouter>
  {/* 通过渲染 <Routes> 和 <Route> 来配置路由、path属性指定路由路径、element属性指定路由渲染的组件 */}
   <Routes>
      <Route path="/" element={<App />} />
      <Route element={<AuthLayout />}>
          {/* 嵌套路由，子路由通过父路由中的 <Outlet/> 进行渲染。 */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Route>
      {/* 只有path时只添加路由前缀而没有父组件 */}
      <Route path="concerts">
           {/* 索引路由就像一个默认的子路由，匹配 /concerts */}
          <Route index element={<ConcertsHome />} />
          {/* 动态路由参数，:city 是一个参数、可以在组件中通过 useParams 钩子获取 */}
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
      </Route>
      <Route path="/article" element={<div>文章页</div>} />
    </Routes>
  </BrowserRouter>,
);

// 链接跳转，用户通过 <Link>、<NavLink> 和 useNavigate() 来跳转路由。
import { NavLink, Link, useNavigate  } from "react-router";
function Header() {
  // 此钩子允许程序员在没有用户交互的情况下将用户导航到新页面。跟vue的路由对象类似
  let navigate = useNavigate();
  return (
    <nav>
      {/* 此组件用于需要渲染激活状态的导航链接 */}
      {/* 每当 NavLink 处于激活状态时，它都会自动获得一个 .active 的类名，以便使用 CSS 轻松设置样式。 */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      {/* 当链接不需要激活样式时，请使用 <Link> 组件。 */}
      <Link to="/concerts/salt-lake-city">Concerts</Link>
      {/* 登录表单，登录成功后跳转到 /dashboard */}
      <MyLoginForm
        onSuccess={() => {
          navigate("/dashboard");
        }}
      />

    </nav>
  );
}

// 路由出口
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      {/* 子路由通过 <Outlet/> 组件进行渲染。类似vue中的routerview */}
      <Outlet />
    </div>
  );
}

// 动态路由参数从动态段解析出来的值-和vue是一样的
// <Route path="/concerts/:city" element={<City />} />
// :city 是动态段。该城市的解析值将从 useParams 中获取。
import { useParams } from 'react-router';

export default function City() { 
  // 获取动态路由参数对象，所以可以解构出参数
  const params = useParams();
  const { city } = useParams();
  return (
    <div>
      <h1>城市: {params.city}</h1>
      <h1>城市: {city}</h1>
    </div>
  );
}

// URL搜索参数，搜索参数是 URL 中 ? 之后的值。它们可以通过 useSearchParams 访问，该钩子返回一个 URLSearchParams 的实例。
// <Route path="/search" element={<Search />} />
// /search?query=react-router-dom
import { useSearchParams } from 'react-router';

export default function Search() {
  // 返回当前 URL 的 URLSearchParams 和一个更新它们的函数的元组。注意：设置搜索参数会引起导航。
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  return (
    <div>
      <h1>搜索查询: {query}</h1>
    </div>
  );
}



```

**数据路由例子**
这个就跟vue中抽离路由配置类似了
```js
// 入口文件  src/index.js
// 引入 createRoot - react18之后拆分了
import { createRoot } from 'react-dom/client'
// 引入路由提供者用于绑定路由配置 
import { RouterProvider } from 'react-router'
// 引入路由配置
import router from'./router'

// 获取根元素
const root = createRoot(document.getElementById('root'))
// 挂载App渲染根元素下
root.render(
 {/* 将路由器传递给RouterProvider */}
 <RouterProvider router={ router } />
)


// src/router/index.js 建一个路由器并将其导出
import { createBrowserRouter } from "react-router";

// 配置路由，不像声明式一样通过渲染组件来配置路由、而是通过数组来配置路由。
// 路由对象的配置和声明式路由一样
// {
//  path:"路径",
//  element:组件,
//  children:子路由数组,
//  index:索引路由,
//  loader:加载函数,路由加载器在路由组件渲染之前为其提供数据。
// errorElement:错误组件,
// unstable_middleware: unstable_middleware,  类似vue中的路由守卫
// action: action, 路由动作函数，在路由组件渲染之后为其提供数据。
// lazy: lazy, 路由懒加载函数，用于在需要时加载路由组件。
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,// Router5.x 中使用 Component 属性、6.x之后不支持该属性。
  },
  // 嵌套路由
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  // 索引路由
  { path: "/", index: true, element: <Home /> },
  // 动态路由参数
  {
    path: "teams/:teamId",
    // 结构路由参数对象
    loader: async ({ params }) => {
      // params are available in loaders/actions
      let team = await fetchTeam(params.teamId);
      return { name: team.name };
    },
    element: Team,
  },
]);

export default router;

// 通过路由加载器提供给路由组件的数据可在组件中通过 useLoaderData 获取
import { useLoaderData } from "react-router";

function MyRoute() {
  const { records } = useLoaderData();
  return <div>{records.length}</div>;
}


```

**框架路由例子**
```js
// 创建路由并导出
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;




```

**例子**
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

### 3、路由导航
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

### 4、路由传参
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

### 5、嵌套路由
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


## 3.3 redux相关学习

### 1、Redux 概述
类似vuex
Redux 是 JavaScript 状态容器，提供可预测化的可维护的状态管理。它是一个专门用来做状态管理的js库（不是react插件）作用：集中式管理react应用中的多个组件共享的状态。Redux 是一个使用叫做 “action” 的事件来管理和更新应用状态的模式和工具库、它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

使用情况：
1. 应用中有很多 state 在多个组件中需要使用（共享）
2. 一个组件需要改变另一个组件的状态（通信）
3. 总体原则：能不用就不用，如果不用比较吃力才用

安装Redux 核心库：`npm install redux`

在实际生产使用上、Redux 是一个小型的独立 JS 库、它通常与其他几个包一起使用，以帮助管理 React 应用程序中的状态。Redux 可以集成到任何的 UI 框架中，其中最常见的是 React。所以有对应专门的包 React-Redux 官方包，它可以让 React 组件访问 state 片段和 dispatch actions 更新 store，从而同 Redux 集成起来。Redux Toolkit 是一个工具库，用于简化 Redux 的使用，并提高开发效率。所以一般还会一起安装两个包：`npm install @reduxjs/toolkit react-redux`。
此外 Redux DevTools 浏览器插件扩展 可以显示 Redux 存储中状态随时间变化的历史记录。可以方便调试应用程序。

#### Redux 核心概念和相关术语
和vuex类似的
state：驱动应用的真实数据源头
view：基于当前状态的视图声明性描述
actions：根据用户输入在应用程序中发生的事件，并触发状态更新

单向数据流（one-way data flow）
 用 state 来描述应用程序在特定时间点的状况
 基于 state 来渲染出 View
 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新，生成新的 state
 基于新的 state 重新渲染 View

然而，当我们有多个组件需要共享和使用相同 state 时，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。解决这个问题的一种方法是从组件中提取共享 state，并将其放入组件树之外的一个集中位置(即redux)。通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。这就是 Redux 背后的基本思想：在应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。

**State**
state 是一个普通的 JavaScript 对象，它包含应用程序的所有状态数据。它是永远不可变的，这意味着你不能直接修改它，只能通过创建一个新的对象来更新状态。

**Action**
action 是一个具有 type 字段的普通 JavaScript 对象。你可以将 action 视为描述应用程序中发生了什么的事件.type 字段是一个字符串，给这个 action 一个描述性的名字，比如"todos/todoAdded"。我们通常把那个类型的字符串写成“域/事件名称”，其中第一部分是这个 action 所属的特征或类别，第二部分是发生的具体事情。
action 对象可以有其他字段，其中包含有关发生的事情的附加信息。按照惯例，我们将该信息放在名为 payload 的字段中。

```js
// 一个典型的 action 对象
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

**Action Creator**
action creator 是一个创建并返回一个 action 对象的函数。它的作用是让你不必每次都手动编写 action 对象.

```js
// action creator 
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

**Reducer**
reducer 是一个纯函数，它接收当前状态 state 和 一个 action 对象，并返回一个新的状态。它负责根据 action 类型来更新状态。函数签名是：(state, action) => newState。 你可以将 reducer 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件。
```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === "counter/increment") {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1,
    };
  }
  // 返回原来的 state 不变
  return state;
}
```

**Store**
Store 不是类。它只是有几个方法的对象。当前 Redux 应用的 state 存在于一个名为 store 的仓库对象中、store 是通过传入一个 reducer 函数来创建的。
```js
import { createStore } from "redux";

// reducer
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}
// action creator
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}
// 创建 store
const store = createStore(todos, ["Use Redux"]);
// store 有一个名为 getState 的方法，它返回当前状态值
console.log(store.getState());
// [ 'Use Redux', 'Read the docs' ]

```

**Dispatch**
Redux store 有一个 dispatch 方法，用于发送 action 到 reducer。更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象。 dispatch(action) 会调用 reducer 并更新 store 中的 state。
```js
// 发送 action 到 store
store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs",
});
store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
console.log(store.getState());
```

**Selector**
Selector 也是一个函数，可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑、而是通过调用函数返回来获取数据。
```js
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
```


### 2、Redux实战
在实际的项目中，使用 react-redux这样的 UI 绑定库。以及Redux Toolkit 工具库。
安装:`npm install @reduxjs/toolkit react-redux`
```js
// src/store/store.js
// 创建 store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../views/customRedux/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 创建 slice 状态片
// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // slice 名称
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 并不是真正的改变 state 因为它使用了 immer 库
      // 当 immer 检测到 "draft state" 改变时，会基于这些改变去创建一个新的
      // 不可变的 state
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// 导出 actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// 导出 reducer
export default counterSlice.reducer;
// 导出选择器
export const selectCount = (state) => state.counter.value;

// 在首页集成
// 引入严格模式
import { StrictMode } from "react";
// 引入 createRoot - react18之后拆分了
import { createRoot } from "react-dom/client";
// 引入 store  和 Provider 进行绑定
import { Provider } from "react-redux";
import { store } from "./store";
// 引入路由提供者用于绑定路由配置
import { RouterProvider } from "react-router-dom";
// 引入路由配置
import router from "./router";

// 获取根元素
const root = createRoot(document.getElementById("root"));
// 挂载App渲染根元素下
root.render(
  <StrictMode>
    {/* 绑定 store */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);


// 组件中使用-任何调用 useSelector 或 useDispatch 的 React 组件都可以访问 <Provider> 中的 store。
// useSelector传入一个 selector 函数，它会为我们调用 someSelector(store.getState())，并返回结果。
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from './counterSlice'
function Counter() {
  // 从 store 中获取 counter 值
  const counter = useSelector((state) => state.counter.value);
  // 获取 dispatch 函数
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}


```
### 3、总结
1. 我们可以使用 Redux Toolkit configureStore API 创建一个 Redux store
  configureStore 接收 reducer 函数来作为命名参数
  configureStore 自动使用默认值来配置 store
2. 在 slice 文件中编写 Redux 逻辑
  一个 slice 包含一个特定功能或部分的 state 相关的 reducer 逻辑和 action
  Redux Toolkit 的 createSlice API 为你提供的每个 reducer 函数生成 action creator 和 action 类型
3. Redux reducer 必须遵循以下原则
  必须依赖 state 和 action 参数去计算出一个新 state
  必须通过拷贝旧 state 的方式去做 不可变更新 (immutable updates)
  不能包含任何异步逻辑或其他副作用
  Redux Toolkit 的 createSlice API 内部使用了 Immer 库才达到表面上直接修改（"mutating"）state 也实现不可变更新（immutable updates）的效果
4. 一般使用 “thunks” 来开发特定的异步逻辑
  Thunks 接收 dispatch 和 getState 作为参数
  Redux Toolkit 内置并默认启用了 redux-thunk 中间件
5. 使用 React-Redux 来做 React 组件和 Redux store 的通信
  在应用程序根组件包裹 <Provider store={store}> 使得所有组件都能访问到 store
  全局状态应该维护在 Redux store 内，局部状态应该维护在局部 React 组件内


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










