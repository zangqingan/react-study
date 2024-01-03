import Avatar from './avatar.js'

// UserInfo组件，孙子组件
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />      
            <div className="UserInfo-name">
            {props.user.name}      
            </div>    
        </div>
    );
}

export default UserInfo