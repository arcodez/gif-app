import styled from "styled-components";
import { Imagen } from "../Gif/style";

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-left-color: green;

  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContenedorImagenes = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 3px;

  @media (max-width: 1000px) {
    width: 95%;
  }

  @media (max-width: 700px) {
    width: 90%;
    ${Imagen} {
      width: 48%;
    }
  }
`;

export const Buscador = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 10px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url("https://www.w3schools.com/css/searchicon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;

  &:focus {
    width: 100%;
  }
`;

export const Linea = styled.div`
  border-top: 5px solid #347d39;
  margin-bottom: 40px;
`;
