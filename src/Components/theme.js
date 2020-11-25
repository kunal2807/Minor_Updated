import { createMuiTheme, useTheme, ThemeProvider } from '@material-ui/core/styles';

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },

  typography :{

    h1: {
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)", 
      WebkitBackgroundClip: "text",
      color: "transparent",
      textTransform: "uppercase",
      transition: "all .2s",
      cursor: "default",

      "&:hover": {
        transform: "skewY(2deg) skewX(15deg) scale(1.2)",
        textShadow: ".5rem 1rem 2rem  rgba($color-black, .2)",
      }
    },

    button: {
      fontSize: "2rem",
      backgroundImage: "linear-gradient(to right, #e8cbc0, #636fa4)",
      color: "balck",
      letterSpacing: "1.3rem",
      borderRadius: "10rem",
      align: "center",
      width: "20rem",
      transition: "all .2s",
      position: "relative",


      "&:hover": {
        transform: "scale(1.23) translateY(-1.3rem)",
        boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
      },

      "&:active, &:focus": {
        outline: "none",
        transform: "translateY(0rem)",
        boxShadow: "0 .5rem 1rem rgba($color-black,0.2)",
      }
    }
  }
});