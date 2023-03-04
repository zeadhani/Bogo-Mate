import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Navbar from "./components/UI/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/Home";
import ShopPage from "./screens/Shop";
import SideBar from "./components/UI/Global/SideBar";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
