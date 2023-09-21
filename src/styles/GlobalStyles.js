import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ArtCompanyMono-Light.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  padding: 0;
  margin: 0;
  /* background-color: #c7fb83; */
}



@font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  }

a, p, li, ul, h1, h2, .cursor {
  font-family: 'Art-Company-Mono', Courier New;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
}

a {
  text-shadow: 0px 0px 5px #d8ff3d, 0px 0px 5px #d8ff3d, 0px 0px 5px #d8ff3d; 
}

.image__lightbox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 2000;
    padding: 50px;
  }

  .lightbox__inner {
    pointer-events: none;
  }

  .image__lightbox .portrait .gatsby-image-wrapper img {
    height: calc(100vh - 150px);
  }

  .image__lightbox .landscape .gatsby-image-wrapper img {
    height: calc(100vh - 300px);
  }

  .lightbox__caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }


  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

html,body {
  cursor: none;
}
html *,body * {
  cursor: none;
}
.c--hidden {
   opacity: 0;
}

.cursor {
    text-transform: uppercase;
    width: 20px;
    height: 20px;
    backdrop-filter: blur(5px);
    /* background-color: black; */
    border: 0.5px solid black; 
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%); 
    transition-property: opacity;
    /* transition: all 100ms ease;  */
    transition-property: opacity, background-color, transform;
    z-index: 5000;
    pointer-events: none;
    transition: width 300ms ease, height 0s ease, border-radius 500ms ease, background-color 0s ease;

    }

  .c--click {
    /* transform: translate(-50%, -50%) scale(0.5);
    background-color: #121212; */
  }
  .c--hover, .l--hover {
    width: 75px;
    height: 25px;
    background: none;
    border-radius: 15px;
    transition: width 500ms ease, height 500ms ease, background-color 500ms ease;
    text-align: center;
    /* transform: translate(-50%, -50%) scale(1.25); */
  }

  .cursor p  {
    opacity: 0;
  }

  .c--hover p, .l--hover p {
    font-size: 18px;
    line-height: 22px;
    opacity: 1;
    transition: opacity 1s ease;
  }

  .l--hover {
    width: 75px;
  }

  .lightbox__caption p {
  font-size: 18px;
  line-height: 18px;
  }


  .lightbox__date {
    padding-right: 20px;
  }

  @media screen and (max-width: 799px) {

    a, p, li, ul, h1, h2, .cursor, .lightbox__caption p {
  font-size: 14px;
  line-height: 20px;

}

.cursor {
  display: none;
}
   
  }


`;
export default GlobalStyles;
