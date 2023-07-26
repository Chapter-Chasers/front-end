import React from "react"
import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => <footer className="page-footer bg-dark text-white font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase text-info">Social Media</h5>
        <ul className="list-unstyled">
          <li><Link to={'/'} className="link-footer mb-3 text-white text-decoration-none" >Facebook</Link></li>
          <li><Link to={'/aboutUs'} className="link-footer text-white text-decoration-none" >LinkedIn</Link></li>
        </ul>
      </div>

      <hr className="clearfix w-100 d-md-none pb-0" />
      <div className="col-md-6 mb-md-0 mb-3">
        <h5 className="text-uppercase text-info">Links</h5>
        <ul className="list-unstyled">
          <li><Link to={'/'} className="link-footer mb-3 text-white text-decoration-none" >Home</Link></li>
          <li><Link to={'/aboutUs'} className="link-footer text-white text-decoration-none" >About Us</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-copyright text-center py-3">© 2023 Copyright: ChapterChasers
  </div>

</footer>

export default Footer