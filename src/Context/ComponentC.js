import React, { Component } from 'react'
import {UseContexts} from './Context'
class ComponentC extends Component {
  render() {
    return (
      <>
      <div>hi</div>
    
        <UseContexts>

   
   {
    userName=>{
        return <h1>{userName}</h1>
    }
   }
        </UseContexts>
       
        </>
    )
  }
}

export default ComponentC