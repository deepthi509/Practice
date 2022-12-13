import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = { hasError: false };
    
    }
    static getDerivedStateFromError() {
        return { hasError: true };
      }
      
    componentDidCatch(error,info){
       console.log(error,info)
       return { hasError: true };
      
    }
  render() {
    if (this.state.hasError){
        return <>
        <h1>some thing went wrong</h1>
        </>
    }
    return this.props.children;
  }
}

export default ErrorBoundary