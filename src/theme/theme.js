const theme = {
  ul: {
    padding: 0
  },
  breakpoints: ["640px", "768px"],
  colors: {
    headerBg: "#194979",
    text: "#000",
    background: "#fff",
    primary: "#6200ee",
    secondary: "#03dac6",
    muted: "#f6f6f6",
    gray: "#555"
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "inherit",
    monospace: '"Roboto Mono", monospace'
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    icon: 24,
    avatar: 48
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    1: "0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08)"
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle"
    },
    card: {
      p: "14px 18px",
      bg: "background",
      boxShadow: 1,
      borderRadius: "5px"
    },
    countryCard: {
      variant: "variants.card",
      transition: "background-color .3s",
      ":hover": {
        backgroundColor: "#ddd"
      }
    },
    fullCountryCard: {
      variant: "variants.card",
      p: "30px 18px"
    },
    link: {
      color: "#000",
      textDecoration: "none"
    },
    nav: {
      variant: "text.caps",
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary"
      }
    }
  },
  buttons: {
    primary: {
      variant: "text.caps",
      fontSize: 2,
      fontWeight: "body",
      color: "background",
      bg: "primary",
      borderRadius: "default"
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary"
    },
    icon: {
      bg: "inherit",
      padding: 0,
      display: "flex",
      cursor: "pointer"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }
  }
};

export default theme;
