import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header.tsx'
import BuyProperty from './pages/BuyProperty.tsx';
import SellProperty from './pages/SellProperty.tsx';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        {/* Buy & Landing page */}
        <Route
          path = {"/"}
          element = { <BuyProperty /> }
        />
        <Route
          path = {"/buy"}
          element = { <BuyProperty /> }
        />
        {/* Sell page */}
        <Route
          path = {"/sell"}
          element = { <SellProperty />}
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App