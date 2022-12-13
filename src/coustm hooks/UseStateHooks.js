import React, { useState } from 'react'

function UseStateHooks(initialState) {
  const [name,setName]=useState(initialState)
  const bind={
    name,
    onChange: (e) => {
          setName(e.target.value)
      },
    
  }
 const reset=()=>{
    setName(initialState)
}
  return [ name,bind,reset]
}

export default UseStateHooks