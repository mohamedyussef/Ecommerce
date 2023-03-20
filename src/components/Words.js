import React from "react";
import "./words.css";
export default function Words() {
  return (
    <div className="words">
      <div>Here is what you are looking for</div>
      <div className="flex">
        <p>Such as</p>
        <div className="cont">
          <span>.</span>
          <span>T-Shirts</span>
          <span>Jacket</span>
          <span>Monitor</span>
          <span>More+</span>
        </div>
      </div>
    </div>
  );
}
