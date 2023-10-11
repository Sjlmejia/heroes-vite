import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth";

export const Navbar = () => {
  const {user}=useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }
  return (
  <nav className="flex border-b">
    <NavLink className={({isActive}) => `mr-1 text-blue-500 hover:text-blue-800 
    ${isActive ? '-mb-px bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold': 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'}` } to="/">Asociaciones
    </NavLink>
    <NavLink className={({isActive}) => `mr-1
     ${isActive ? '-mb-px  bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold': 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'}` } to="/marvel">Marvel
    </NavLink>
    <NavLink className={({isActive}) => `mr-1
     ${isActive ? '-mb-px bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold': 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'}` }  to="/dc">DC
    </NavLink>    <NavLink className={({isActive}) => `mr-1
     ${isActive ? '-mb-px bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold': 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'}` }  to="/search">Search
    </NavLink>
    <div className="flex justify-end w-4/5 pr-5">
      <span>
        {user?.name}
        <button 
          className=" border rounded bg-blue-500 ml-5 text-white px-3"
          onClick={onLogout}
          >
          Logout
        </button>
      </span>
    </div>
    </nav>
  )
}
