import type { ThemeOptions } from "@mui/material/styles";

const typography: ThemeOptions["typography"] = {
  fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  fontSize: 14,
  h1: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  h2: {
    fontSize: "2.25rem",
    fontWeight: 700,
  },
  h3: {
    fontSize: "1.875rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "uppercase",
  },
};

export default typography;
