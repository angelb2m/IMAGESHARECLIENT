import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header(){
  const [user, loading, error] = useAuthState(auth);

  return (
      <div className="border-b-2 backdrop-blur py-3 sticky top-0 z-40 bg-white/75 dark:bg-black/75 border-gray-200 dark:border-slate-300">
          <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
                 <div className='w-12 flex justify-center items-center'>
                   <Link to="/">
                     <img src="./logo.png" alt="Logotipo de la empresa"/>
                   </Link>
                 </div>
           <div>
             <Link className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/">Home</Link>
             { user ?
                 <Link className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/profile">Perfil</Link>
              :
                 <Link className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/login">Login</Link>
             }
             <Link className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/gallery">Galería</Link>
             <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" href="#">GitHub</a>
             <ThemeToggle/>  
             <Outlet /> 
           </div>
          </div>
      </div>
  )
}

export default Header

