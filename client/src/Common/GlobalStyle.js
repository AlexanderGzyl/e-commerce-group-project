import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  :root {
    // --color-cadmium-red: #D80026;
    // --color-alabama-crimson: #AA001E;
    // --color-orange: #F79D00;
    // --color-selective-yellow: #FDBB01;
    // --color-desert-sand: #E3C4A6;
    // --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
    // --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
    // --padding-page: 24px;
    --color-black: #0B0C10;
    --color-darkgray: #1F2833;
    --color-lightgray:#C5C6C7;
    --color-aquamarine: #66FCF1;
    --color-cadetblue: #45A29E;
  }

  html,body {

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }
  }

`;

