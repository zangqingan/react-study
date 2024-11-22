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