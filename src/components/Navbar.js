import React from 'react';

function Navbar(props) {

  return (
    <nav className="red" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li className="active"><a href="#">Navbar Link</a></li>
            <li><a href="#">Navbar Link</a></li>
            <button onClick={handleClick} className="btn waves-effect waves-ripple">close</button>
          </ul>


          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    </nav>
  );
}

function handleClick () {
  console.log ("click");
}

export default Navbar;