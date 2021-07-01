import React from "react";
import { Imagen, Overlay } from "./style";

export function Gif({ g = {}, index = 0 }) {
  return (
    <Imagen>
      <img src={g.images.downsized_medium.url} alt={g.title} />
      <Overlay>
        <h2>{g.title}</h2>
      </Overlay>
    </Imagen>
  );
}
