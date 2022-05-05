import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function ModalLayout(props) {
    const navigate = useNavigate();

  return (
  <div className="flex w-screen h-screen absolute justify-center items-center	top-0	bg-black/20 dark:bg-white/20">
    <div className="w-96  rounded-xl border bg-white dark:bg-black">
      <div className='border-b-2 w-full h-16 flex justify-center items-center'>
         <div className="h-auto w-12" >
            <img src="./logo.png" alt="Logotipo de la empresa"/>
         </div>      
      </div>
      <div className="w-full" >
         <p className="text-2xl text-center text-gray-900 font-bold dark:text-gray-100 py-4">Te damos la bienvenida a ImageShare</p>
         <p className="text-l text-center dark:text-gray-100 py-2">Todo lo que subas es publico para toda persona.</p>
      </div>

      <div className="w-full">
          {props.children}
      </div>
      
      
      <div className="flex justify-center items-center py-4">
            <div className="text-center w-10/12">
             <p className="text-xs text-gray-900 dark:text-gray-100">Al continuar, aceptas las Condiciones de servicio de ImageShare y reconoces que leíste nuestra Política de privacidad.</p>
            </div>
      </div>

      <div className="border-t-2 flex justify-center items-center py-2">
           <button className="text-gray-900 dark:text-gray-100 text-md" onClick={() => navigate(-1)}>{props.backButtonText}</button>
      </div>
    </div>
  </div>  )
}
