import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Navbar from "./components/UI/Header/Navbar";
import SideBar from "./components/UI/Global/SideBar";
import Footer from "./components/UI/Footer/Footer";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "react-toastify/dist/ReactToastify.min.css";
import ToastMessage from "./components/UI/Global/ToastMessage";
import ProfileDrawer from "./components/UI/Global/profileDrawer/ProfileDrawer";
import Announcement from "./components/UI/Global/Announcement";
import RouteComponent from "./components/Auth/RouteComponent";

const queryClient = new QueryClient();
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
            <RouteComponent />
          </div>
          <Footer />
          <ToastMessage />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
