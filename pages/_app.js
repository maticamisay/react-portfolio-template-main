import {appWithTranslation}  from "next-i18next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
