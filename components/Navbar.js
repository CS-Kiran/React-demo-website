import PropTypes from "prop-types";
import React from "react";



export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>

          {/* change mode */}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
              <input
                class="form-check-input mx-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toogleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                MODE
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

//Props are used to render the navbar on the page.

// To set the prop type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// To set the default value for the navbar props if title is not provided

Navbar.defaultProps = {
  title: "Set title",
  aboutText: "About",
};
