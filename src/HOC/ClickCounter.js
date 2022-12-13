import React from 'react'
import ReuseHoc from './ReuseHoc'
function ClickCounter({count,inc}) {
  return (
  <>
  <button onClick={inc}>click here{count}</button>
  </>
  )
}

export default ReuseHoc(ClickCounter,10)