import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button onClick={login} className="btn" type="button">
      Login
    </button>
  )
}

export default Login
