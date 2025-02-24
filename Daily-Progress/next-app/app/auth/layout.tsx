import React from 'react'

export default function({children} :{
    children : React.ReactNode 
}) {
  return (
    <div>
        <div className='border-b p-1 text-center'>
            20% off on this website
        </div>
        {children}
    </div>
  )
}
