
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const [linkClicked, setLinkClicked] = useState(false);
  useEffect(() => {
    if (linkClicked) {
      window.scrollTo(0, 0); 
      setLinkClicked(false); 
    }
  }, [linkClicked]);
  const handleLinkClick = () => {
    setLinkClicked(true);
  };
  return (
    <>
      <footer className="page-footer text-white font-small">
        <div className="container-fluid text-center text-md-left">
          <div className="row justify-content-center">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase" style={{ marginTop: '5px' }}>Social Media</h5>
              <br />
              <ul className="list-unstyled">
                <li>
                  <Link
                    to={'https://www.facebook.com/'}
                    className="pi pi-facebook"
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '30px' }}
                    target="_blank"
                  ></Link>
                </li>
                <br />
                <li>
                  <Link
                    to={'https://www.linkedin.com/'}
                    className='pi pi-linkedin'
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '30px' }}
                    target="_blank"
                  ></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mt-md-0 mt-3">
              <div className="container">
                <div className="col-md- mb-md-0 mb-3">
                  <h5 className="text-uppercase" style={{ marginTop: '5px' }}>Links</h5>
                  <br />
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to={'/'}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={handleLinkClick} 
                      >
                        Home
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link
                        to={'/aboutUs'}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={handleLinkClick} 
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <p>© 2023 Copyright: ChapterChasers</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;