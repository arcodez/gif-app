import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #347d39a4;
  width: 100%;
  height: 0;
  overflow: hidden;
  border-radius: var(--border);
  transition: 0.5s ease;
  h2 {
    color: var(--text-color);
    font-weight: 300;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
`;

export const Imagen = styled.div`
  width: 32%;
  position: relative;
  height: 250px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  border-radius: var(--border);
  img {
    border-radius: var(--border);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover ${Overlay} {
    height: 100%;
    cursor: pointer;
  }
`;
