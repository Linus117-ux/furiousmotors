import React from 'react'

const Footer = () => {
  return (
    <div>
        <section class="row  p-3" style={{}}>
            {/* <!-- child1  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-info">About Us</h2>
                <p class="text-white">We offer very high standard servises which is proven by the many 5 star ratings
                    given by our customers.We are a family of many people who will always ensure your place is styled
                    with the best colors.</p>
            </div>
            {/* <!-- child2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-info">Contact Us</h2>
                <form action="">
                    <input type="email" placeholder="Enter your E-mail" class="form-control"/> <br/><br/>
                    <textarea name="" id="" class="form-control" placeholder="Leave a comment" ></textarea> <br/><br/>
                    <input type="submit" value="Send message" class="btn btn-outline-info"/>
                </form>
            </div>
            {/* <!-- child3 --> */}
            <div class="col-md-4 text-center">
                <h2 class="text-center text-info">Stay connected</h2>
                <a href="https://facebook.com">
                    <img src="images/fb.png" alt="facebook"/>
                </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://instagram.com">
                    <img src="images/in.png" alt="instagram"/>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://x.com">
                    <img src="images/x.png" alt="twitter"/>
                </a>
                <p class="text-white">Make sure you follow us on the Webpages above in order to be notified of any new
                    releases.</p>
            </div>
        </section>
    </div>
  )
}

export default Footer