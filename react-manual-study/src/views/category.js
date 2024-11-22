// 分类页
import { Link, useParams  } from 'react-router-dom'
export default function Category() {
    // 获取路由参数
    const params = useParams()
    const id = params.id
    const name = params.name
    return (
      <>
        <div>
          分类页-动态路由参数-{id}-{name}
        </div>
        <Link to="/">首页</Link>
      </>

    )
}