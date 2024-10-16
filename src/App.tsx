import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header.tsx'
import BuyCalculators from './pages/BuyCalculators.tsx';
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
          element = { <BuyCalculators /> }
        />
        <Route
          path = {"/buy"}
          element = { <BuyCalculators /> }
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