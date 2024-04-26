import React from 'react'
import logo from './img/netflix_logo.png' 
import avatar from './img/avatar.png' 
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'


function CustomNavbar() {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid className="p-0">
        <Navbar.Brand href="#" className="p-0">
          <img
            src={logo}
            alt="Logo Netflix"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="active text-secondary hover5">Home</Nav.Link>
            <Nav.Link href="#" className="active text-light hover5">Tv Shows</Nav.Link>
            <Nav.Link href="#" className="active text-secondary hover5">Movies</Nav.Link>
            <Nav.Link href="#" className="active text-secondary hover5">Recently Added</Nav.Link>
            <Nav.Link href="#" className="active text-secondary hover5">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center flex-row">
            <div>
            <Nav.Link href="#" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
              </div>
              <div className='ms-3 ms-md-0'>
            <Nav.Link href="#KIDS" className="text-white">KIDS</Nav.Link>
            </div>
            <div className='ms-3 ms-md-0'>
            <Nav.Link href="#Campanellina" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            </div>
            <div className='ms-3 ms-md-0 me-3'>
            <NavDropdown title={<img src={avatar} alt="Immagine Profilo" height="30" />} id="basic-nav-dropdown"  className="" drop="down" menuVariant='dark'>
              <NavDropdown.Item href="#ProfilePage" className="hover">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#SettingsPage" className="hover">Impostazioni</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;
