



import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
export default function Navbar() {



  const{ loginWithRedirect, logout, isAuthenticated }=useAuth0();



  return (
    <div style={{backgroundColor:"#0000FF",marginTop:"10px",height:"80px"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://imgs.search.brave.com/eBaqEkK46e5wLPsqO7jeGy1RHZdpQuaKBJAEEao7WBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb2xvcmZ1bC1n/cmFkdWF0aW9uLWNh/cC13aXRoLXdvcmQt/Z3JhZHVhdGlvbi1j/ZW50ZXJfMjcyMzA2/LTI0OTUuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
                alt="Logo"
                loading="lazy"
              style={{height:"60px"}}/>
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: 30, height: 40 }}>
              <li className="nav-item">
              <b><Link className="nav-link" style={{ fontFamily: 'Roboto',color:"white" }} to="/">Home</Link></b>
              </li>
              <li className="nav-item">
              <b><Link className="nav-link" style={{ fontFamily: 'Roboto' ,color:"white" }} to="/about">About Us</Link></b>
              </li>
              <li className="nav-item">
              <b><Link className="nav-link" style={{ fontFamily: 'Roboto',color:"white"  }} to="/suggestion">Suggestion</Link></b>
              </li>
              <li className="nav-item">
              <b><Link className="nav-link" style={{ fontFamily: 'Roboto',color:"white"  }} to="/register">Register</Link></b>
              </li>
             
              <li className="nav-item">
              { isAuthenticated ?
               
              
               (  <button  style={{borderRadius:6,height:46,width:80,backgroundColor:"blue",color:"white",borderColor:"white",marginTop:"2px",paddingLeft:"230px", float:"right"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>):
               (<button style={{borderRadius:6,height:46,width:80,backgroundColor:"blue",color:"white",borderColor:"white",marginTop:"2px",paddingLeftt:"230px",float:"right"}} onClick={() => loginWithRedirect()}>Log In</button>)
                 }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
