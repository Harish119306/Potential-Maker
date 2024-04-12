import React,{useState} from "react"
import "./login.css"
import axios from "axios"
import {  useNavigate } from "react-router-dom"




const Login=({setLoginUser})=> {
    
    const Navigate = useNavigate()

    const[user,setUser]= useState({
        
        email :"",
        password : ""
        }
    )
    const handleChange = e =>{
       
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }
    const Login = () =>{
        axios.post("http://localhost:9002/login",user)
        .then(res =>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            Navigate("/")
           })
    }

 



  return (
    
    <div className="login">
        
        <h1>login</h1>
        <input type="text"name="email" value={user.email} placeholder="Enter your Email"onChange={handleChange} />
        <input type="password"name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
        <button className="button"onClick={Login}>Login</button>
        <div>or</div>
        <button className="button" onClick={()=>Navigate("/Register")} >Register</button>
    </div>
  )
}

export default Login
