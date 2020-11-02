import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu(props) {
  return (
    <React.Fragment>
      <div className="font-bold py-3 text-black">Menu</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-2 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-2 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-blue-500 py-2 border-b block"
            onClick={props.closeMenu}
          >
            Products
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavMenu;
