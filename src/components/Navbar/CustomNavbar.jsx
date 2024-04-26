import React from 'react';
import logo from './img/netflix_logo.png' 
import avatar from './img/avatar.png' 

function CustomNavbar() {
    return (
      <header className="bg-black">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-0">
            <a className="navbar-brand p-0" href="#2">
              <img
                src={logo}
                alt="Logo Netflix"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-secondary hover5" aria-current="page" href="#1">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light hover5" aria-current="page" href="#1">Tv Shows</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-secondary hover5" aria-current="page" href="#1">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-secondary hover5" aria-current="page" href="#1">Recently Added</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-secondary hover5" aria-current="page" href="#1">My List</a>
                </li>
              </ul>
              <div className="d-flex p-0 m-0 align-items-center">
                <nav>
                  <ul className="d-flex list-unstyled m-0 text-white">
                    <li className="mx-2">
                      <a className="nav-link" href="#1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="#KIDS" className="nav-link">KIDS</a>
                    </li>
                    <li className="mx-2">
                      <a href="#Campanellina" className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn p-0 dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={avatar}
                      alt="Immagine Profilo"
                      height="30"
                    />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end bg-dark">
                    <li>
                      <button className="dropdown-item" type="button">
                        <a
                          href="#ProfilePage"
                          target="_blank"
                          className="text-decoration-none text-white"
                        >Edit Profile</a>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <a
                          href="#SettingsPage"
                          target="_blank"
                          className="text-decoration-none text-white"
                        >Impostazioni</a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default CustomNavbar;
