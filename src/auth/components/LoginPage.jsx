import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/marvel', {
      replace:true
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <button
        className=" border rounded bg-blue-500 ml-5 text-white px-3"
        onClick={onLogin}
        >
        Login
      </button>
    </div>
  )
}