import React from 'react'

export default function Shimmer() {
  return (
    <div className="flex flex-wrap bg-pink-300">
        {
            Array(10).fill("").map((e,index) =>(
                <div key={index} className='shimmer-card'></div>
            ))
        }
    </div>
  )
}
