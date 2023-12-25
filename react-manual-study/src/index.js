// 入口文件
// 1. 引入 ReactDom - react18之后拆分了
import ReactDom from 'react-dom/client'

// 创建一个JSX
const  App = <div>
    <h1>我是react应用</h1>
    <p>你好</p>
</div>

// 获取根元素
const root = ReactDom.createRoot(document.getElementById('root'))
// 挂载App渲染根元素下
root.render(App)