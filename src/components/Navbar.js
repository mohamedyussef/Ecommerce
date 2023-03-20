import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  const count2 = useSelector((state) => state.counter.counter);
  function cont() {
    if (count2 > 0) {
      return `(${count2})`;
    }
  }
  return (
    <div className="nav-b container">
      <Link className="Title" to="/">
        Ecommerce
      </Link>
      <Link to="/Cart" className="nav-right">
        <div style={{ marginRight: 4, fontWeight: "bold" }}>Shop</div>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
          {cont()}
        </div>
      </Link>
    </div>
  );
}
