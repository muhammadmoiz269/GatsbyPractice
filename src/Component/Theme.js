import React from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
    // palette: {
    //     primary: {
    //     //   main: "#0C2461",
    //     }
    // }
    
    typography:{
        fontFamily: "sans-serif"
    }
});
export default function Theme({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
   
        {/* <Normalize/> */}
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </>
  );
}
