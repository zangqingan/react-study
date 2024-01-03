import Comment from '../component/comment.js'
// 数据对象类似vue中的data中定义的数据
const comment = [
    {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
    },
    {
        date: new Date(),
        text: '希望你能喜欢',
        author: {
          name: '开心',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
    },
    {
        date: new Date(),
        text: '如果可以的话',
        author: {
          name: '你好',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
    }
]

function App(props) {
    // 返回一个JSX
    return (
        <div>
            <h1>我是react应用、hello {props.name}</h1>
            <button onClick={showMsg}>你好、</button>
            <br />
            <br />
            
            {
                comment.map(item => <Comment  {...item} />)
            }
        </div>
    )
}

const showMsg =  () => {
    alert('hello')
}

export default App