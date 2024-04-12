import React,{useState} from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"




const Register=()=> {


    const Navigate = useNavigate()
    const[user,setUser]= useState({
        name :"",
        email :"",
        password : "",
        reEnterPassword : ""}
    )
    const handleChange = e =>{
       
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const register =()=>{
      const{name,email,password,reEnterPassword} = user
      if(name && email && password && (password===reEnterPassword)){
      axios.post("http://localhost:9002/register",user)
    .then(res =>{
      alert(res.data.message)
      Navigate("/login")
  })
    }
      else{
        alert("invalid syntax")
      }
  }



  return (
    <div className="register">
      {console.log("User", user)}
         <h1>register</h1>
         <input type="text"name="name" value={user.name} placeholder="Enter your name"onChange={handleChange} />
        <input type="text"name="email" value={user.email} placeholder="Enter your Email"onChange={handleChange} />
        <input type="password"name="password" value={user.password} placeholder="Enter your password"onChange={handleChange} />
        <input type="password"name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password"onChange={handleChange} />
        <button className="button" onClick={register}>register</button>
        <button className="button" onClick={()=>Navigate("/login")}>login</button>
    </div>
  )
}

export default Register
