import React from 'react'
import "./navbarr.css"
function Navbar() {
  return (
    <div className='navii'>
          <div className="fixed-top">
    <header className="topbar">
      <div className="container">
        <div className="row">
          {/* social icon*/}
          <div className="col-sm-12">
            <ul className="social-network">
              <li>
                <a className="waves-effect waves-dark" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="waves-effect waves-dark" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="waves-effect waves-dark" href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a className="waves-effect waves-dark" href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li>
                <a className="waves-effect waves-dark" href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
      <div className="container">
        <a
          className="navbar-brand"
          rel="nofollow"
          target="_blank"
          href="http://scadonsak.com/7bF"
          style={{ textTransform: "uppercase" }}
        >
          {" "}
          NUSASATU.COM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://nusasatu.com">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fruits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sea food
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vegetables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    </div>
  )
}

export default Navbar