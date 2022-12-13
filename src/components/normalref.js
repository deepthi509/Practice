import React, { Component } from 'react'

 class Normalref extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef=React.createRef()
    }
clickevent=()=>{
    alert(this.inputRef.current.value)
}

componentDidMount(){
    this.inputRef.current.focus()
}
  render() {
    return (
      <>
      <input  type='text' ref={this.inputRef}></input>
      <button onClick={this.clickevent}> click here</button>
      </>
    )
  }
}

export default Normalref