import UserInfo from './userInfo.js'
import { formatDate } from '../utils/index'

// function Comment(props) {
//     return (
//       <div className="Comment">
//         {/* 再把整个UserInfo抽离成一个组件  */}
//         <div className="UserInfo">
//             {/* 我们再把这个img抽离成一个头像组件  */}
//             <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
//             <div className="UserInfo-name">
//                 {props.author.name}
//             </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {/* 花括号相当于vue的插值表达式,所以可以运行js函数*/}
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
// }
// 抽离成组件

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={ props.author }/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {/* 花括号相当于vue的插值表达式,所以可以运行js函数*/}
          {formatDate(props.date)}
        </div>
      </div>
    );
}
export default Comment