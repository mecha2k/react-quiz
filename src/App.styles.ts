import styled, { createGlobalStyle } from "styled-components"
import backgroundImage from './images/nattu-adnan-unsplash.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
  
  html {
    height: 100%;
  }
  
  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    margin: auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: blue;
  }

  .score {
    color: blue;
    font-size: 2rem;
    margin: 0;
  }
  
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
  .start {
    max-width: 200px;
  }
`