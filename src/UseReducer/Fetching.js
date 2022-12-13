import React ,{useEffect,useReducer}from 'react'
import axios from 'axios'
function Fetching() {
  const initialState={
    loading:true,
    posts:{},
    error:undefined
  }
  const reducer=( state, action)=>{
    switch(action.type){
      case 'SUCESS':
       return {
          loading:false,
          posts: action.payload,
          error:undefined
        }
        case 'ERROR':
          return {
            loading:false,
            posts: {},
            error: 'something went wrong'
          }
          default:
            return state

    }

  }
  const[post,dispatch]=useReducer(reducer,initialState)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typico.com/todos/1')
      .then(res=>{
        //console.log(res)
       const resul= dispatch({type:'SUCESS',payload:res.data})
        console.log(resul)
    })
      .catch(dispatch({type:'ERROR'}))
      
    }, [])
    
  return (
    <div>Fetching
     {post.loading?'loading': post.posts.title}
     {post.error&&<h1>{post.error}</h1> }
    </div>
  )
}

export default Fetching