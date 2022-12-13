import React, { Component } from 'react'
import ChildRef from './ChildRef'



class ParentRef extends Component {
    constructor(props) {
      super(props)
      this.ParentRef=React.createRef()
      
    }
    clickevent=()=>{
        this.ParentRef.current.focusInput()
    }
  render() {
    return (
     
      <>
       <div>ParentRef</div>
    
    <ChildRef ref={this.ParentRef}/>
      <button onClick={this.clickevent}> click here</button>
      </>
    )
  }
}

export default ParentRef