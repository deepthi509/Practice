import React from 'react'
import ReuseHoc from './ReuseHoc'
function MouseCounter( {count,inc}) {
  return (
   <>
   <p onMouseMove={inc}>click here{count}</p>
   </>
  )
}

export default ReuseHoc(MouseCounter,5)