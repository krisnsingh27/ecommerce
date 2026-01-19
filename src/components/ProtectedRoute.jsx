import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute() {
    const navigate=useNavigate()
    let token=localStorage.getItem("isloggedin")
    if(!token){
        navigate("/signup")

    }
    

  return (
    <div>
        
    </div>
  )
}

export default ProtectedRoute
