import React from 'react'

function ClickFun({count,clickhandler}) {
  return (
   <>
    <button onClick={clickhandler}>click here{count}</button>
   </>
  )
}

export default ClickFun