import React from 'react'

export const Demo = ({firstname,lastname}:{firstname:string,lastname:string}) => {
  return (
    <div>
        <h1> hello{firstname}{lastname}</h1>
    </div>
  )
}
``