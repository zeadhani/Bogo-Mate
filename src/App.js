import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Navbar from "./components/UI/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/UI/Global/SideBar";
import Footer from "./components/UI/Footer/Footer";
import React from "react";
import CustomSuspense from "./components/UI/Global/CustomSuspense";


const HomePage = React.lazy(() => import("./screens/Home"));
const ProductsDashboard = React.lazy(() => import("./screens/Product"));
const ProductDetails = React.lazy(() =>
  import("./screens/Product/ProductDetails")
);
const AboutUsPage = React.lazy(() => import("./screens/About/AboutUs"));
const ShopPage = React.lazy(() => import("./screens/Shop"));
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CustomSuspense>
              <HomePage />
            </CustomSuspense>
          }
        />
        <Route
          path="/About us"
          element={
            <CustomSuspense>
              <AboutUsPage />
            </CustomSuspense>
          }
        />
        <Route
          path="/shop"
          element={
            <CustomSuspense>
              <ShopPage />
            </CustomSuspense>
          }
        />
        <Route
          path="shop/:brand"
          element={
            <CustomSuspense>
              <ProductsDashboard />
            </CustomSuspense>
          }
        />
        <Route
          path="shop/:brand/:product"
          element={
            <CustomSuspense>
              <ProductDetails />
            </CustomSuspense>
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
