import React from 'react'

function Test() {
    const x=1
    if(x==1){
        throw new Error("not found")
    }
  return (
    <div>Test</div>
  )
}

export default Test