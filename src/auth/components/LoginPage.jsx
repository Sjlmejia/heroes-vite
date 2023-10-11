import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login( 'Jorge Mejia');
    navigate(lastPath, {
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