import axios from "axios"
import React, {useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";










const Getproduct=()=>{
    let navigate = useNavigate();
    // declare our states here 
    const[loading,setLoading]=useState("")
    const[products,setProduct]=useState([])
    const[error,setError]=useState("")
    // function to get products 
    const getproducts=async()=>{
        setLoading("Please wait as products load")
        try {
            const response=await axios.get("https://linushiggs.alwaysdata.net/api/getproduct")
            setProduct(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }
    // call the function 
    useEffect(()=>{
        getproducts()
    },[])
    console.log(products);
    const imagepath="https://linushiggs.alwaysdata.net/static/images/"
    
    


    return(
      <div className="min-vh-1 p-5">
        {/* carousel goes here  */}
        <Carousel/>
        <h1 className="text-info ">Available products</h1>
        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* map here  */}
        <div className="row justify-content-center">

        {products.map(singleproduct=>(
            
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-lg h-100  ">

            {/* image goes here  */}
            <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"300px" , objectFit:"cover"}} className="card-img-top"/>
            <div className="card-body">
                <h3 className="text-info">{singleproduct.product_name}</h3>
                <p>{singleproduct.product_description}</p>
                <b className="text-warning">ksh{singleproduct.product_cost}</b> <br />
                <button className="btn btn-outline-info w-100 rounded-pill py-3 fw-bold mt-3"  onClick={()=>navigate("/makepayment" ,{state:{singleproduct}})}>purchase now </button>
            </div>
            </div>
        </div>
            ))}
            </div> <hr />
            {/* Footer goes here */}
            <Footer/>
      </div>
    )
}
export default Getproduct