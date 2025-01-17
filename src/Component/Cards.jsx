import React from 'react'

function Cards({ children }) {
  return (
    <div className="  mx-4 transform md:-skew-x-12 origin-bottom mb-4 w-[300px] h-[366px] ">
        {children}
</div>
  )
}

export default Cards