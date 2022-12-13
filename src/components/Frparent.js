import React, { Component } from 'react'
import FRchild from './FRchild'

 class Frparent extends Component {
    constructor(props) {
        super(props)
        this.ParentRef=React.createRef()
        
      }
      clickevent=()=>{
          this.ParentRef.current.focus()
      }
  render() {
    return (
        <>
        <div>ParentRef</div>
     
        <FRchild ref={this.ParentRef}/>
       <button onClick={this.clickevent}> click here</button>
       </>
    )
  }
}

export default Frparent