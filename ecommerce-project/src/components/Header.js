import React, { Component } from 'react';
import logonav from '../img/logonav.png';


class MenuItem extends Component{
    render() {
        return (
            <li className="nav-item dropdown">
            <p className="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {this.props.title}<b>+</b>
            </p>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><p className="dropdown-item" href="#">Action</p></li>
              <li><p className="dropdown-item" href="#">Another action</p></li>
              <li><hr className="dropdown-divider" /></li>
              <li><p className="dropdown-item" href="#">Something else here</p></li>
            </ul>
          </li>
        )
    };
}

class Header extends Component {
    render() {
        return (
            <header>

<nav className="navbar navbar-expand-lg navbar-light bg-nav ec-nav">
        <div className="container-fluid ">
          <img src={logonav} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            </ul>
           
          </div>
        </div>
      </nav>

      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
            <MenuItem title="Home" />
            <MenuItem title="Shop" />
            <MenuItem title="Promotions" />
            <MenuItem title="Fashion" />
            <MenuItem title="Blog" />
            <MenuItem title="Pages" />
             
            </ul>
          
          </div>
        </div>
      </nav> 
            </header>
        )
    }
}

export default Header
