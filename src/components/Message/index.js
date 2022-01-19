import './index.css'

const Message = props => {
  const {isLogged} = props
  return isLogged ? (
    <h1 className="paragraph">Welcome User</h1>
  ) : (
    <h1 className="paragraph">Please Login</h1>
  )
}
export default Message
