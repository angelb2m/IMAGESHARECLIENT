import React from "react";
import Pin from "../../components/Pin";


function Gallery(props){
  let { pins } = props;

  return (
      <div className="w-full flex justify-center mt-4 bg-white dark:bg-gray-900">
          <div className='h-full bg-white dark:bg-gray-900 my-0 mx-auto galleryContainer'>
              {
                  pins.map((pin, index) => {
                      let {urls} = pin;
                      return <Pin key={index} urls={urls}/>
                  })
              }
          </div>
      </div>
  )
}

export default Gallery;

// 
