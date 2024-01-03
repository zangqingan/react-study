// 入口文件
// 1. 引入 ReactDom - react18之后拆分了
import ReactDom from 'react-dom/client'
// 引入根组件
import App from './views/App'

// 获取根元素
const root = ReactDom.createRoot(document.getElementById('root'))
// 挂载App渲染根元素下
root.render(<App name='zhangsan' />)