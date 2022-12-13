import React from 'react'

function Children({age}) {
    console.log("inc for ageinc")
  return (<>
    <div>Children</div>
    <p>{age}</p>
    </>
  )
}

export default React.memo(Children)