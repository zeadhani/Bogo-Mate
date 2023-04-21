import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import CustomSuspense from "../UI/Global/CustomSuspense";
import AuthRoutes from "./AuthRoutes";
import NoMatch from "../UI/Global/NoMatch";

const HomePage = React.lazy(() => import("../../screens/Home"));
const ProductsDashboard = React.lazy(() => import("../../screens/Product"));
const ProductDetails = React.lazy(() =>
  import("../../screens/Product/ProductDetails")
);
const AboutUsPage = React.lazy(() => import("../../screens/About/AboutUs"));
const ShopPage = React.lazy(() => import("../../screens/Shop"));
const HelpPage = React.lazy(() => import("../../screens/help"));
const ContactUsPage = React.lazy(() => import("../../screens/contactus"));
const SearchComponent = React.lazy(() => import("../../screens/search"));
const ProfilePage = React.lazy(() => import("../../screens/Profile"));
const ChangePassword = React.lazy(() =>
  import("../../screens/Profile/changePassword")
);
const EditProfile = React.lazy(() =>
  import("../../screens/Profile/EditProfile")
);
const ChangePref = React.lazy(() => import("../../screens/Profile/changePref"));
const UserDashboard = React.lazy(() =>
  import("../../screens/Profile/UserDashboard")
);
const OrdersHistory = React.lazy(() =>
  import("../../screens/Profile/OrdersHistory")
);
const Login = React.lazy(() => import("../../screens/Auth/Login"));
const Register = React.lazy(() => import("../../screens/Auth/Register"));
const AddReview = React.lazy(() => import("../../screens/Profile/addReview"));
function RouteComponent() {
  //   return (
  //     <Routes>
  //       <Route element={<PrivateRoutes />}>
  //         <Route
  //           path="/"
  //           element={
  //             <CustomSuspense>
  //               <HomePage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/About us"
  //           element={
  //             <CustomSuspense>
  //               <AboutUsPage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/shop"
  //           element={
  //             <CustomSuspense>
  //               <ShopPage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="shop/:brand"
  //           element={
  //             <CustomSuspense>
  //               <ProductsDashboard />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="shop/:brand/:product"
  //           element={
  //             <CustomSuspense>
  //               <ProductDetails />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/help"
  //           element={
  //             <CustomSuspense>
  //               <HelpPage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/contact-us"
  //           element={
  //             <CustomSuspense>
  //               <ContactUsPage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/search"
  //           element={
  //             <CustomSuspense>
  //               <SearchComponent />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile"
  //           element={
  //             <CustomSuspense>
  //               <ProfilePage />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile/edit"
  //           element={
  //             <CustomSuspense>
  //               <EditProfile />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile/password"
  //           element={
  //             <CustomSuspense>
  //               <ChangePassword />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile/preferences"
  //           element={
  //             <CustomSuspense>
  //               <ChangePref />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile/dashboard"
  //           element={
  //             <CustomSuspense>
  //               <UserDashboard />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/profile/orders"
  //           element={
  //             <CustomSuspense>
  //               <OrdersHistory />
  //             </CustomSuspense>
  //           }
  //         />
  //       </Route>
  //       <Route element={<AuthRoutes />}>
  //         <Route
  //           path="/Auth/Login"
  //           element={
  //             <CustomSuspense>
  //               <Login />
  //             </CustomSuspense>
  //           }
  //         />
  //         <Route
  //           path="/Auth/Register"
  //           element={
  //             <CustomSuspense>
  //               <Register />
  //             </CustomSuspense>
  //           }
  //         />
  //       </Route>
  //       <Route
  //         path="*"
  //         element={
  //           <CustomSuspense>
  //             <NoMatch />
  //           </CustomSuspense>
  //         }
  //       />
  //     </Routes>
  //   );
  const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about us",
      component: AboutUsPage,
    },
    {
      path: "/shop",
      component: ShopPage,
    },
    {
      path: "/shop/:brand",
      component: ProductsDashboard,
    },
    {
      path: "/shop/:brand/:product",
      component: ProductDetails,
    },
    {
      path: "/help",
      component: HelpPage,
    },
    {
      path: "/contact-us",
      component: ContactUsPage,
    },
    {
      path: "/search",
      component: SearchComponent,
    },
    {
      path: "/profile",
      component: ProfilePage,
    },
    {
      path: "/profile/edit",
      component: EditProfile,
    },
    {
      path: "/profile/password",
      component: ChangePassword,
    },
    {
      path: "/profile/preferences",
      component: ChangePref,
    },
    {
      path: "/profile/dashboard",
      component: UserDashboard,
    },
    {
      path: "/profile/orders",
      component: OrdersHistory,
    },
    {
      path: "/profile/add-review/:id",
      component: AddReview,
    },
  ];
  const authRoutes = [
    {
      path: "/auth/login",
      component: Login,
    },
    {
      path: "/auth/register",
      component: Register,
    },
  ];
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <CustomSuspense>
                <route.component />
              </CustomSuspense>
            }
          />
        ))}
      </Route>
      <Route element={<AuthRoutes />}>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <CustomSuspense>
                <route.component />
              </CustomSuspense>
            }
          />
        ))}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default RouteComponent;
