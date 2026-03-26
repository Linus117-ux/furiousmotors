import React from 'react'

const Carousel = () => {
  return (
    <section class="rowrow mt-1 justify-content-center d-flex align-items-center min-vh-50">
    <div class="col-md-12">
        {/* <!-- a division containing carousel content --> */}
        <div class="carousel slide"  id="mycarousel" data-bs-ride="carousel">
            {/* <!-- division containing images  --> */}
            <div class="carousel-inner">
                {/* <!-- div with image 1 --> */}
                <div class="carousel-item">
                    <img src="images/my3.jpg" alt="slide1" style={{height:"500px" , width:"100%" , objectFit:"cover"}}/>
                </div>
                {/* <!-- div with image2 --> */}
                <div class="carousel-item">
                    <img src="images/my2.jpg" alt="slide2" style={{height:"500px" , width:"100%" , objectFit:"cover"}}/>
                </div>
                {/* <!-- div with image3 --> */}
                <div class="carousel-item">
                    <img src="images/my4.jpg" alt="slide3" style={{height:"500px" , width:"100%" , objectFit:"cover"}}/>
                </div>
                {/* <!-- div with image4 --> */}
                <div class="carousel-item active">
                    <img src="images/my1.jpg" alt="slide4" style={{height:"500px" , width:"100%" , objectFit:"cover"}}/>
                </div>
            </div>
            {/* <!-- previous control --> */}
            <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black rounded-pill"></span>
            </a>
            {/* <!-- next control  --> */}
            <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black rounded-pill"></span>
            </a>
        </div>
    </div>
</section>
  )
}

export default Carousel