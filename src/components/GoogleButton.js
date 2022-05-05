import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton(props) {
  return (
    <div className="flex justify-center items-center py-1">
      <div  onClick={props.onClick} className="border-2 flex justify-center items-center bg-white dark:bg-gray-900 cursor-pointer	 py-2 px-4  rounded-2xl w-10/12">
        <div className="inline-flex  w-2/12">
          <FcGoogle/>
        </div>
      <div className="w-8/12">
        <p className="text-gray-900 dark:text-gray-100 font-semibold">{props.text}</p>
      </div>
     </div>
    </div>
  )
}
