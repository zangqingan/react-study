import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
// 回显作者名称组件
export default function PostAuthor({ userId }) {
  const author = useSelector((state) => selectUserById(state, userId));

  return <span>by {author ? author.name : "Unknown author"}</span>;
}
