import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
 import logo from "../logo.png"

function Header() {
  return (
//     <Navbar expand="lg" className="bg-dark ">
//       <Container >
        
//         <Navbar.Brand className='text-danger'  href="#home"><img style={{width: "100px"}} src={logo} alt="" /></Navbar.Brand>
//         <Navbar.Toggle  aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto ">
//             <Nav.Link className='text-white' href="#home">Home</Nav.Link>
//             <Nav.Link className='text-secondary' href="#link">TV Shows</Nav.Link>
//             <Nav.Link className='text-secondary' href="#link">Movies</Nav.Link>
//             <Nav.Link className='text-secondary' href="#link">Recently Added</Nav.Link>
//             <Nav.Link className='text-secondary' href="#link">My List</Nav.Link>
           
//           </Nav>
//           <Nav>
//             <Nav.Link className='text-white' href="#link"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
// </svg></Nav.Link>
//             <Nav.Link   className='text-white ' href="#link">KIDS</Nav.Link>
//             <Nav.Link className='text-white' href="#link"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
//   <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
// </svg></Nav.Link>
//             <Nav.Link className='text-white' href="#link"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
//   <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
// </svg></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
<>

<nav
        class="navbar navbar-expand-lg px-5 bg-dark"
        data-bs-theme="dark"
        style={{backgroundColor: "#221f1f"}}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="link"
            ><img src={logo} alt='logo' style={{width: "100px", height:" 55px"}}
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold" href="link">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="link">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="link">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="link">Recently Added</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="link">My List</a>
              </li>
            </ul>
            <div class="d-flex  gap-3">
              <button className='border-0 bg-transparent'>

            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
              </button>
            <button className='border-0 bg-transparent text-secondary'>KIDS</button>
              
              <button className='border-0 bg-transparent'>

              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
              </svg>
              </button>
              <button className='border-0 bg-transparent'>
            
     
               <div class="btn-group dropstart">
  <button type="button" class="btn btn-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
               </svg>  
  </button>
  <ul class="dropdown-menu p-3">
    <li><a href="link">Profile</a></li>
    <li><a href="link">Settings</a></li>
    <li><a href="link">Exit</a></li>
   
  </ul>
</div>


            
              </button>
            </div>
          </div>
        </div>
      </nav>
</>
  );
}

export default Header;