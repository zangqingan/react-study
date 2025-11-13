import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Count from "../component/count.js";
import Comment from "../component/comment.js";
import { AddPostForm } from "./post/AddPostForm.js";

import { selectCount, selectUserName } from "./customRedux/counterSlice";
// 数据对象类似vue中的data中定义的数据
const commentData = [
  {
    id: 1,
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    id: 2,
    date: new Date(),
    text: "希望你能喜欢",
    author: {
      name: "开心",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    id: 3,
    date: new Date(),
    text: "如果可以的话",
    author: {
      name: "你好",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App(props) {
  const count = useSelector(selectCount);
  const userName = useSelector(selectUserName);
  // 返回一个JSX
  return (
    <div>
      <h1>我是react应用、hello {props.name}</h1>
      <h2>计数器: {count}</h2>
      <h2>用户姓名: {userName}</h2>
      <button onClick={showMsg}>你好、</button>
      <br />
      <Link to="/login">跳转登录页</Link>
      <br />
      <Link to="/board"> 面板</Link>
      <Link to="/about"> 关于</Link>
      <Link to="/task"> 任务</Link>
      <Link to="/redux"> redux</Link>
      <Link to="/posts"> posts</Link>
      <br />

      {commentData.map((item) => (
        <Comment key={item.id} {...item} />
      ))}
      <br />
      <Count />
      <hr />
      <h3>添加新文章</h3>
      <AddPostForm />
      <hr />

      <h3>下面是嵌套路由出口</h3>
      <Outlet />
    </div>
  );
}

const showMsg = () => {
  alert("hello");
};

export default App;
