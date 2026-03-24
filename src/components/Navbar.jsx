import React from 'react'

const Navbar = () => {
  return (
    <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md" id='navbar'>
                    <a href="/" class="navbar-brand text-primary fw-bold" style={{ color: "#1e40af" }}>🚗Furious Motors</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link text-info">Home</a>
                            <a href="/addproduct" class="nav-link text-info">Add product</a>
                            <a href="/signin" class="nav-link text-info">Signin</a>
                            <a href="/signup" class="nav-link text-info">Signup</a>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar