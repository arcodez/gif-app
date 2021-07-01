import React, { Fragment } from "react";
import "./style.css";

export function Gif({ g = {}, index = 0 }) {
  return (
    <div className="imagen">
      <img src={g.images.downsized_medium.url} alt={g.title} />
      <div className="overlay">
        <h2>{g.title}</h2>
      </div>
    </div>
  );
}
