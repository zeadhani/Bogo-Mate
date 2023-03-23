import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Navbar from "./components/UI/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/UI/Global/SideBar";
import Footer from "./components/UI/Footer/Footer";
import React from "react";
import CustomSuspense from "./components/UI/Global/CustomSuspense";
import PrivateRoutes from "./components/Auth/PrivateRoutes";
import AuthRoutes from "./components/Auth/AuthRoutes";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import NoMatch from "./components/UI/Global/NoMatch";
import { QueryClientProvider, QueryClient } from "react-query";
import "react-toastify/dist/ReactToastify.min.css";
import ToastMessage from "./components/UI/Global/ToastMessage";
const queryClient = new QueryClient();
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
      <QueryClientProvider client={queryClient}>
        <SideBar />
        <div className="main">
          <Navbar />
          <div className="mainSection">
            <Routes>
              <Route element={<PrivateRoutes />}>
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
              </Route>
              <Route element={<AuthRoutes />}>
                <Route path="/Auth/Login" element={<Login />} />
                <Route path="/Auth/Register" element={<Register />} />
              </Route>
              <Route
                path="*"
                element={
                  <CustomSuspense>
                    <NoMatch />
                  </CustomSuspense>
                }
              />
            </Routes>
          </div>
          <Footer />
          <ToastMessage />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
