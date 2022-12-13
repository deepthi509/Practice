import React, { useEffect, useRef } from 'react'

function Ref() {
    const ref=useRef()
    var res
   
   const  clickevent=()=>{
    if(ref.current.value)
        alert(ref.current.value)
        document.write(ref.current.value)
         res=ref.current.value
        return res
    }
    useEffect(()=>{
        ref.current.focus()
        // clickevent()
        //  return ref.current.value()
    })
   
  return (
    <>
    <div>Ref</div>
    <input type='text' ref={ref}></input>
   
    <button onClick={clickevent}> click here</button>
    <p>{res}abvfue</p>
  </>)
    
}

export default Ref