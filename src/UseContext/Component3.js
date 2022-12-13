import React,{useContext} from 'react'
import {CreateContext,SecondContext} from '../App'
function Component3() {
    const myname= useContext(CreateContext)
    const  name =useContext(SecondContext)
  return (
    <div>Component3{myname}-{name}</div>
  )
}

export default Component3