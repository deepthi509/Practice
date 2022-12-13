import React, { useState } from 'react'

const ReuseHoc=(OriginalComponent,counter)=> {
  const NewComponent=()=>{

    const[state,setState]=useState(0)

    return(
        <OriginalComponent count={state} inc={()=>setState(state+ counter)}/>
    )
  }
  return NewComponent
}

export default ReuseHoc