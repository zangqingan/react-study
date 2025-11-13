import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";
import "./post.css";

export default function PostsList() {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <TimeAgo timestamp={post.date} />
      {/* 回显作者名称 */}
      <PostAuthor userId={post.user} />
      <div className="btn-content">
        {/* 跳转详情页 */}
        <Link to={`/posts/${post.id}`} className="button">
          详情
        </Link>
        {/* 跳转编辑页 */}
        <Link to={`/editPost/${post.id}`} className="button">
          编辑
        </Link>
      </div>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}
