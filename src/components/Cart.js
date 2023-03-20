import React from "react";
import "./shopcart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreament, deleteItemCounter, increament } from "../redux/actions";
import {
  removeOneItem,
  deleteItem,
  addToCart,
} from "../redux/actions/cartReducer";
import { Link } from "react-router-dom";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  if (cart.cartItem.length == 0) {
    return (
      <div className="Empty">
        <div>Your Cart Is Empty</div>
        <Link className="Empty_back" to="/">
          Go back to shopping
        </Link>
      </div>
    );
  } else {
    return (
      <div className="CartShopping">
        <div className="leftCart">
          {" "}
          {cart.cartItem.map((e) => {
            return (
              <div key={e.id} className="browse">
                <div className="title">{e.title}</div>
                <div
                  onClick={function () {
                    dispatch(deleteItem(e));
                    dispatch(deleteItemCounter(e.qty));
                  }}
                  className="icon"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </div>
                <img src={e.image} />
                <div className="price">
                  {" "}
                  <div>price:{e.price}$</div>
                  <div>count:{e.qty}</div>
                </div>
                <div>
                  <div className="pri"> TotalPrice:{e.price * e.qty}</div>
                  <button
                    onClick={function () {
                      dispatch(removeOneItem(e));
                      dispatch(decreament());
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={function () {
                      dispatch(addToCart(e));
                      dispatch(increament());
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rightCart">
          <div className="img">
            <img className="img1" src={img1} width="10" height="10" />
            <img className="img1" src={img2} width="10" height="10" />
            <img className="img1" src={img3} width="10" height="10" />
            <img className="img1" src={img4} width="10" height="10" />
          </div>
          <div className="totalPrice">TotalPrice:{cart.totalPrice}$</div>
          <div className="btn1">Buy Now</div>
        </div>
      </div>
    );
  }
}
