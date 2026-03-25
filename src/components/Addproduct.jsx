import axios from "axios"
import React,{useState} from "react"




const Addproduct=()=>{
// Declare the steas here 
const[product_name,setProductName]=useState("")
const[product_description,setProductDescription]=useState("")
const[product_cost,setProductCost]=useState("")
const[product_photo,setProductPhoto]=useState("")
// define three states for hosting data 
const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")
// function to handlesubmit 
const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait..")
    // Create empty digital envelope to store data 
    const formdata=new FormData()
    // add/appednd 
    formdata.append("product_name" , product_name)
    formdata.append("product_description" , product_description)
    formdata.append("product_cost" , product_cost)
    formdata.append("product_photo" , product_photo)
    try {
        const response=await axios.post("http://linushiggs.alwaysdata.net/api/addproduct" , formdata)
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
        setError(error.message)
        setLoading("")
        
    }
}



    return(
       <div className="row mt-2 justify-content-center py-5">
        <div className="card shadow-lg border-0 rounded-4 col-md-6 p-4 ">
            <h1 className="text-dark fw-bold">Add products</h1>
            <p className="text-muted">Fill in all the required fields</p>
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-success">{success}</h2>
             <h2 className="text-danger">{error}</h2>


            <form action="" onSubmit={handlesubmit}>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" placeholder="Enter product name" onChange={(e)=>setProductName(e.target.value)}/> 
                <label htmlFor=""className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>Enter product name</label>
                </div>
                <div className="form-floating mb-3">
                <textarea name="" id="" className="form-control" placeholder="Enter product description" onChange={(e)=> setProductDescription(e.target.value)}></textarea> <br />
                <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>Enter product description</label>
                </div>
                <div className="form-floating">
                <input type="number" className="form-control" placeholder="Enter product cost" onChange={(e)=>setProductCost(e.target.value)}/> <br />
                <label htmlFor="" className="form-label fw-bold text-info" style={{ fontSize: "0.85rem" }}>Enter product cost</label>
                </div>
                <input type="file" accept="image/*" className="form-control" onChange={(e)=>setProductPhoto(e.target.files[0])} /> <br />
                <input type="submit"  className="btn btn-primary w-100 py-3 fw-bold shadow mt-3 rounded-pill" value="Add product"style={{ fontSize: "0.85rem" }} />

            </form>

        </div>

       </div>
    )
}
export default Addproduct