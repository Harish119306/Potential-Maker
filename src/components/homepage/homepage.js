import React from "react"
import "./homepage.css"


const Homepage=({setLoginUser})=>{
  return (
    <div className="homepage">
        <h1>hello to homepage</h1>
        <button className="button" onClick={() => setLoginUser({})}>Logout</button>
      
    </div>
  )
}

export default Homepage
