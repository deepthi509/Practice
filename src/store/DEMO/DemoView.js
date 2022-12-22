import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {DemoData} from './DemoSlice'
export const DemoView = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.demodata)
    useEffect(() => {
      
    dispatch(DemoData())
    
    }, [])
    
  return (
    <div>DemoView
        {data.data.map(ele=><p>{ele.name}</p>)}
    </div>
  )
}
