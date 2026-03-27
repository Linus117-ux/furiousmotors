import axios from "axios"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"



const Mpesapayment=()=>{
    const {singleproduct} = useLocation().state|| {}
    const imagepath="https://linushiggs.alwaysdata.net/static/images/"
    // We declare the states here 
    const[loading, setLoading]=useState("")
    const[success, setSuccess]=useState("")
    const[error , setError]=useState("")
    const[phone, setPhone]=useState("")
    // function to make payment 
    const handlesubmit=async(e)=>{
       e.preventDefault()
       setLoading("Please wait..")
    //    create an empty digital envelope 
       const formdata = new FormData()
    //    add/append 
       formdata.append("amount" , singleproduct.product_cost)
       formdata.append("phone" , phone)
       try {
        const response= await axios.post("http://linushiggs.alwaysdata.net/api/mpesa_payment" , formdata)
        setSuccess(response.data.message)
        setLoading("")
       } catch (error) {
        setError(error.message)
        setLoading("")
       }
    }


    return(
       <div className="row mt-1 justify-content-center d-flex align-items-center min-vh-100">
        <h1 className="text-info    ">Make payment - Lipa na mpesa</h1>
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* <h2>The current phone number is {phone}</h2> */}
        <div className="col-md-8 card shadow p-4">
        <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"300px" , objectFit:"contain"}}/>
            
            <div className="card-body " style={{ textAlign: 'left' }}>
                <h1 className="text-info ">{singleproduct.product_name}</h1>
                    <p>{singleproduct.product_description}</p>
                <b className="text-warning">Ksh{singleproduct.product_cost}</b> <br />
                <form action="" onSubmit={handlesubmit}>
                    <input type="number" className="form-control" placeholder="enter phone 254xxxxxxxxx"onChange={(e)=>setPhone(e.target.value)} /> <br />
                    <input type="submit" value="Makepayment" className="btn btn-success w-100" />
                </form>
            </div>
        </div>
       </div>
    )
}
export default Mpesapayment