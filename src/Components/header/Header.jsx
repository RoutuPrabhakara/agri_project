import React from "react";
import logo from '../../assets/media/Agri_Tech.jpg'
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark ">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            {/* <h3 className="fs-3 text-white m-0">Agri</h3> */}
            <img src={logo} alt="agri tech" className="imag" style={{width:'50px',height:'50px',borderRadius:"50px",border:'1px solid rgba(5, 252, 71, 0.66)'}}/>
          </a>
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto gap-3 text-center">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/realtime-Market">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reatime-weather">
                  Weather
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/realtime-Educational">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/realtime-Government">
                  Government Schemes
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="btn btn-warning text-white px-3 py-1" href="#">
                  Button
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
