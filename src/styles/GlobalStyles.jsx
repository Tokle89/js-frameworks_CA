import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  --color-primary: #000;
  --color-secondary: #fff;
  --color-tertiary: #444444;
  --font-header: 'Roboto',  sans-serif;
  --font-paragraph: 'Open Sans', sans-serif;
  --font-logo: "Montserrat", sans-serif;
} 

body {
  padding:0;
  font-family: var(--font-paragraph);
  background: var(--color-tertiary);
} 

main {
    background: var(--color-tertiary);
    max-width: 1250px;
    margin: 0 auto;
    padding:50px 0;
  }
*{
  box-sizing:border-box;
  margin:0;

}

h1,h2,h3,h4,h5,h6{
  font-family: var(--font-header);
  font-weight: 400;
}
p, a, button{
  font-size:1.1em;
}
img{
  width:100%;
  
  object-fit:cover;
 
}
svg{
  cursor:pointer;
}
`;

export default GlobalStyles;
