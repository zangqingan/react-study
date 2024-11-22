// 登录页
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    return (
      <>
        <div>
          登录页
        </div>
        <Link to="/">声明式首页</Link>
        <hr />
        <button
          onClick={ () => {
            navigate('/')
        } }>编程式跳转到首页</button>
        <hr />
        <button
          onClick={ () => {
            navigate('/article')
        } }>编程式跳转到文章页</button>
        <hr />
        <button
          onClick={ () => {
            navigate('/article?id=1&name=hanSan')
        } }>编程式跳转到文章页-添加路由参数</button>
      </>

    )
}