import React from 'react'

const FRchild = React.forwardRef((props,ref)=>{
    return (
        <>
      <div>FRchild</div>
      <input type='text' ref={ref}/>
      </>
    )
  }) 

export default FRchild