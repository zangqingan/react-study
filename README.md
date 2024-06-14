# react-study
react框架的学习记录
2024.06.14 重新梳理。

# 一、react概述
[官网:](https://reactjs.org)
React:  它是一个用于构建用户界面(UI)的 JavaScript 库。跟vue类似React也是渐进式的、也可以被逐步采用的即可以按需引入需要的功能模块。

# 二、react-basic-study
react基础语法的学习、这里我们依然不使用构建工具。
基础引入需要3个包在本地进行开发、可以cdn引入也可以下载到本地。

```js
// 1. react的核心库，会暴露 React类、提供了创建 react元素的方法。-React.createElement()
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// 2. react的渲染器，会暴露 ReactDOM类、提供操作虚拟DOM的方法，用于将react元素渲染到页面上。
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// 3. js的编译器，将jsx语法编译成js语法。
// <!-- Don't use this in production: -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

# 三、react-manual-study

使用npm 手动创建 react 项目学习、先要安装3个包 react、react-dom、react-scripts(提供了webpack等功能)
```bash
# 初始化项目
$ npm init -y 
# 安装需要依赖
$ npm i  react react-dom react-scripts 
# 就可以使用本项目内的依赖包打包项目。
$ npx react-scripts bulid 
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
# eslint-config-react-app 是一个由 Create React App 使用的共享 ESLint 配置包，它包含了一套预设的 React 相关的 ESLint 规则。
$ npm install --save-dev eslint-config-react-app eslint@^8.0.0
# eslint-plugin-react 扩展了ESLint 使其能够理解 React 的 JSX 语法
# eslint-plugin-react-hooks 主要关注于 React Hooks 的正确使用。
$ npm install eslint@^8.0.0 eslint-plugin-react eslint-plugin-react-hooks --save-dev
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
自创建项目目录结构如下：



# 四、react-createApp-study
项目实战
使用 create-react-app 工具、用于创建react的单页面应用。

# 五、react-vite-study
使用vite 










