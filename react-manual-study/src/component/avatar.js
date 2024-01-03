// avatar组件，孙孙子组件
function Avatar(props){
    return(
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    )
}

export default Avatar