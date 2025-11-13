import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import PostAuthor from "../users/PostAuthor";
import TimeAgo from "./TimeAgo";

export default function SinglePostPage() {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <TimeAgo timestamp={post.date} />
        {/* 回显作者名称 */}
        <PostAuthor userId={post.user} />
        <Link to={`/editPost/${post.id}`} className="button">
          编辑
        </Link>
        {/* 返回首页 */}
        <Link to={`/`} className="button">
          返回首页
        </Link>
      </article>
    </section>
  );
}
