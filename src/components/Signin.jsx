import axios from "axios"
import React, {useState} from "react"
import { Link , useNavigate} from "react-router-dom"








const Signin=()=>{
    const navigate= useNavigate()
    // Declare the two states 
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[loading, setLoading]=useState("")
    const[success, setSuccess]=useState("")
    const[error, setError]=useState("")

    // function to handle submit 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        // Create empty digital envelope to store the inputs 
        const formdata = new FormData()
        // appending the inputs 
        formdata.append("email", email)
        formdata.append("password" , password)
        try{
            const response = await axios.post("https://linushiggs.alwaysdata.net/api/signin", formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login/sign in is successful we save user to local storage 
            // NB:redirect user to home page 
            if(response.data.user){
                // login succes 
                localStorage.setItem("user" , JSON.stringify(response.data.user))
                // redirect user to homepage 
                navigate("/")

            }else{
                // login failed 
                setSuccess(response.data.message)
            }
        } catch(error){
            setError(error.message)
            setLoading("")
        }
        
    }
    return(
        <div className="row mt-1 justify-content-center container-fluid">
            <div className="col-md-6 card shadow p-5 bg-grey ">
                <h1 style={{ color: "#38bdf8" }}>Sign in</h1>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                 <h2 className="text-success">{success}</h2>
                 <h2 className="text-danger">{error}</h2>

       
                <form action="" onSubmit={handlesubmit}>
                    <div className="form-floating">
                    <input type="email" className="form-control" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} /> <br />
                    <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>📧EMAIL ADDRESS</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> <br />
                    <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>🔐PASSWORD</label>
                    </div>
                    <input type="submit" value="Sign in" className="btn btn-primary w-100 rounded-pill py-3 fw-bold mt-3" /> <br /> <br />
                    
                    <p>
                        Don't have an account?  
                         <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
           
        </div>
    )
}
export default Signin