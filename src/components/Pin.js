import React from 'react'

export default function Pin(props) {

    let { urls } = props;

  return (
      <div className='inline-flex p-2'>
          <div className='flex items-center box-border w-60'>
              <img className='w-full flex object-cover rounded-2xl' src={urls?.regular} alt="pin" />
          </div>
      </div>
  )
}