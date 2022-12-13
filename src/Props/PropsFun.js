import React, { useState } from 'react'
import ClickFun from './ClickFun'

function PropsFun() {
    const [count,setCount]=useState(0)
    const clickhandler=()=>{
        setCount(count+1)
    }
  return (
   <ClickFun  count={count} clickhandler={clickhandler}/>
  )
}

export default PropsFun