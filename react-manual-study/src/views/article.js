// 文章页
import { Link, useSearchParams, useNavigate  } from 'react-router-dom'
export default function Article() {
    const navigate = useNavigate()
    // 获取路由参数
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const name = searchParams.get('name')
    return (
      <>
        <div>
          文章页-路由参数-{id}-{name}
        </div>
        <button onClick={ ()=>navigate('/category/1001/电子产品') }>动态路由传参-跳转分类页</button> 
        <Link to="/">首页</Link>
      </>

    )
}