import React, { useEffect, useState } from "react";
import { addCart } from "../redux/actions";
import { useDispatch } from "react-redux";
import "./browse.css";
import axios from "axios";
import { increament } from "../redux/actions";
import { addToCart } from "../redux/actions/cartReducer";
import Words from "./Words";
export default function Browse() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://cute-red-haddock-veil.cyclic.app/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <Words />
      <center>
        <h1>Browse </h1>
      </center>
      <div className="container">
        <div className="row">
          {product.map((e) => {
            return (
              <div key={e.id} className="browse col-3">
                <div className="title">{e.title}</div>
                <img src={e.image} alt="Pic" />
                <div className="price">Price:{e.price}$</div>
                <div
                  onClick={function () {
                    dispatch(increament());
                    dispatch(addToCart(e));
                  }}
                  // onClick={function () {
                  //   totalprice += e.price;
                  //   c = c + 1;
                  //   addtocart(e.id, e.title, e.image, e.price, totalprice, c);
                  // }}
                  className="btn_browse"
                >
                  Add to cart
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
