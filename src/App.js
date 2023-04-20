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
import ProfileDrawer from "./components/UI/Global/profileDrawer/ProfileDrawer";
import Announcement from "./components/UI/Global/Announcement";

const queryClient = new QueryClient();
const HomePage = React.lazy(() => import("./screens/Home"));
const ProductsDashboard = React.lazy(() => import("./screens/Product/index"));
const ProductDetails = React.lazy(() =>
  import("./screens/Product/ProductDetails")
);
const AboutUsPage = React.lazy(() => import("./screens/About/AboutUs"));
const ShopPage = React.lazy(() => import("./screens/Shop/index"));
const HelpPage = React.lazy(() => import("./screens/help/index"));
const ContactUs = React.lazy(() => import("./screens/contactus/index"));
const SearchComponent = React.lazy(() => import("./screens/search/index"));
const ProfilePage = React.lazy(() => import("./screens/Profile"));
const ChangePassword = React.lazy(() =>
  import("./screens/Profile/changePassword")
);
const EditProfile = React.lazy(() => import("./screens/Profile/EditProfile"));
const ChangePref = React.lazy(() => import("./screens/Profile/changePref"));
const UserDashboard = React.lazy(() =>
  import("./screens/Profile/UserDashboard")
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <SideBar />
        <ProfileDrawer />
        <div className="main">
          <Announcement />
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
                <Route
                  path="/help"
                  element={
                    <CustomSuspense>
                      <HelpPage />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/contact-us"
                  element={
                    <CustomSuspense>
                      <ContactUs />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <CustomSuspense>
                      <SearchComponent />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <CustomSuspense>
                      <ProfilePage />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/profile/edit"
                  element={
                    <CustomSuspense>
                      <EditProfile />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/profile/password"
                  element={
                    <CustomSuspense>
                      <ChangePassword />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/profile/preferences"
                  element={
                    <CustomSuspense>
                      <ChangePref />
                    </CustomSuspense>
                  }
                />
                <Route
                  path="/profile/dashboard"
                  element={
                    <CustomSuspense>
                      <UserDashboard />
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
