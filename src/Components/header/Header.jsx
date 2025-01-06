import React from 'react'

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-sm bg-green logo text-white">
<div className="container-fluid ">
 
 <a className="navbar-brand" href="#">
  <h3 className="fs-3 text-white">Agri</h3>
 </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="collapsibleNavbar">
   <div className="uldata">
   <ul className="navbar-nav gap-3    ">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Marketplace</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Weather</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Government Schemes.</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Button</a>
      </li>
    </ul>
   </div>
  </div>
 
</div>
</nav>




  </header>
  )
}

export default Header