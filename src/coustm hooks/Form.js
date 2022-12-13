import React from 'react'
import UseStateHooks from './UseStateHooks'

function Forms() {
    const[firstName,binfirstname,resetfirstname]=UseStateHooks('')
    const[lastName,bindlastname,resetlastname]=UseStateHooks('')
  const submithandler=()=>{
    alert(`'hello'${firstName} ${lastName}`)
    resetfirstname()
    resetlastname()

}
  return (
    <>
    <form onSubmit={submithandler}>
    <input type='text' {...binfirstname} placeholder='enter firstname' style={{color:'red'}}></input>
    <input type='text' {...bindlastname} placeholder='enter lastname'></input>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Forms