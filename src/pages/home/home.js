import React from "react";

function Home(){
 //p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100
  return (
      <div className="h-4/5 flex justify-center items-center">
        <div className="py-4 text-center">
          <h3 className="text-5xl text-gray-900 font-bold whitespace-pre-line dark:text-gray-100">Comparte tus imágenes.</h3>
          <p className="text-2xl mt-4 dark:text-gray-100">Comienza a subir ahora tus imagenes de forma gratuita y compartelo con quien quieras.</p>
          <p className="text-l mb-16 dark:text-gray-100">Todo lo que subas es publico para toda persona.</p>
          <button className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4 border rounded transition duration-500 ease-in-out transform hover:scale-110 ">Subir Imagen</button>
        </div>
      </div>
  )
}

export default Home

