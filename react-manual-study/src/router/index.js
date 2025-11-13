// 这里封装路由导出即可
// 创建浏览器路由器
import { createBrowserRouter } from "react-router-dom";

import App from "../views/App";
import Login from "../views/login";
import Article from "../views/article";
import Category from "../views/category";
import Board from "../views/board";
import About from "../views/about";
import Task from "../views/taskList";
import CustomRedux from "../views/customRedux";
import PostsList from "../views/post/PostsList";
import SinglePostPage from "../views/post/SinglePostPage";
import EditPostForm from "../views/post/EditPostForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name="HangSan" />,
    children: [
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/redux",
        element: <CustomRedux />,
      },
      {
        path: "/posts",
        element: <PostsList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/category/:id/:name", //添加参数占位符
    element: <Category />,
  },
  {
    path: "/posts/:postId",
    element: <SinglePostPage />,
  },
  {
    path: "/editPost/:postId",
    element: <EditPostForm />,
  },
]);

// 导出
export default router;
