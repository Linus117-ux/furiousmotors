import { Link } from "react-router-dom"
import React,{useState} from "react"
import axios from "axios"

const Signup=()=>{
    // Declare states here 
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to handle submit 
    const handlesubmit= async (e)=>{
       e.preventDefault()
       setLoading("please wait...")
    //    Create empty digital envelope to store user inputs 
    const formdata = new FormData()
    // append/add 
    formdata.append("username",username)
    formdata.append("email",email)
    formdata.append("password",password)
    formdata.append("phone",phone)
    try {
        const response =await axios.post("https://linushiggs.alwaysdata.net/api/signup", formdata)
        setSuccess(response.data.message)
        setLoading("")
    } catch(error){
        setError(error.message)
        setLoading("")
        
    }
}
    return(
        <div className="row mt-1 justify-content-center d-flex align-items-center min-vh-100" >
            <div className="col-md-6 card shadow ">
        <h1>Signup</h1>
        {/* bind the states  */}
       <h2 className="text-warning">{loading}</h2>
       <h2 className="text-success">{success}</h2>
       <h2 className="text-danger">{error}</h2>

       
        <form action="" onSubmit={handlesubmit}> 
            <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}}/> <br />
            <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>👤 Enter Username</label>
            </div>
            <div className="form-floating">
            <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/> <br />
            <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>📧EMAIL ADDRESS</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/> <br />
            <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>🔐Enter your password</label>
            </div>
            <div className="form-floating">
            <input type="tel" className="form-control" placeholder="Enter phone" onChange={(e)=>setPhone(e.target.value)}/> <br />
            <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>📱Enter your phone number</label>
            </div>
            <input type="submit" className="btn btn-primary w-100 rounded-pill py-3 fw-bold mt-3" value="Signin" />
            <p>Already have an account?
            <Link to="/signin">Sign in</Link> <br />
            </p>
        </form>
            </div>
        </div>
    )
}
export default Signup