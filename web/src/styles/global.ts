import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-background: #222222;
  --color-primary-lighter: #444444;
  --color-primary-light: #333333;
  --color-primary: #111111;
  --color-primary-dark: #0f0f0f;
  --color-primary-darker: #000000;
  --color-secondary: #E3B505;
  --color-secondary-dark: #B18E07;
  --color-secondary-darker: #634E00;
  --color-title-in-primary: #EEEEEE;
  --color-text-in-primary: #D6CBA1;
  --color-text-title: #EEEEEE;
  --color-text-complement: #FFFBED;
  --color-text-base: #EEEEEE;
  --color-line-in-white: #E3B50535;
  --color-input-background: #111111;
  --color-button-text: #222;
  --color-disabled: #D8D6D025;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;

  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;

  box-sizing: border-box;

  ::selection {
    background: var(--color-secondary); /* WebKit/Blink Browsers */
  }
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(---color-primary);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-in-primary);
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
