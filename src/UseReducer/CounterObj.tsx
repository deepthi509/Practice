import React ,{useReducer}from 'react'

const intialstate={
    conter1:0,
    counter2:10
}
const reducer=(state:{conter1:number},action:{type:'inc'|'dec',value:number}|{type:'reset'})=>{
    switch(action.type){
        case 'inc':
            return { conter1:state.conter1 + action.value}
        case 'dec':
            return { conter1:state.conter1-action.value}
        case 'reset':
            return intialstate
        default:
            return state
    }


}
function CounterObj() {
    const[count,dispatch]=useReducer(reducer,intialstate)
  return (<>
  <div>CounterObj{count.conter1}</div>
    <button onClick={()=>{dispatch({type:'inc',value:5})}}>inc by 5</button>
    <button onClick={()=>{dispatch({type:'dec',value:5})}}>dec by 5</button>
    <button onClick={()=>{dispatch({type:'inc',value:15})}}>inc by 15</button>
    <button onClick={()=>{dispatch({type:'dec',value:15})}}>dec by 15</button>
    <button onClick={()=>{dispatch({
        type: 'reset'
       
    })}}>reset</button>
  
  </>
    )
}

export default CounterObj