import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MKBox from "components/MKBox";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";

// Material Kit 2 PRO React routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Page from "pages/landing";
import DefaultNavbar from "sections/Navbars/DefaultNavbar";
import DefaultFooter from "sections/Footers/DefaultFooter";

import logoCT from "assets/images/tripmaster.inLogoTransparentWhite.png";

export default function App() {
  const { pathname } = useLocation();


  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultNavbar
        brand="TripMaster.in"
        routes={routes}
        transparent
        light
        image={logoCT}
      />
      <Routes>
        {getRoutes(routes)}
        <Route path="/home" element={<Page />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </ThemeProvider>
  );
}