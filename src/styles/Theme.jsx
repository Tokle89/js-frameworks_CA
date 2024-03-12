import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "var(--color-tertiary)",
  },
  fontFamily: {
    primary: "var(--font-header)",
    secondary: "var(--font-paragraph)",
    tertiary: "var(--font-logo)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
