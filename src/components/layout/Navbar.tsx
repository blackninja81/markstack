import { GithubOutlined } from '@ant-design/icons'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h1>MarkStack</h1>
        <a href='https://github.com/blackninja81/markstack' target='_blank'>
        <GithubOutlined />
        </a>
    </div>
  )
}

export default Navbar