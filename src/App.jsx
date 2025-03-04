/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import { useDispatch, useSelector } from "react-redux";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { Layout } from "./components/layout";
import Dashboard from "./Modules/Dashboard/dashboardNotifications";
import Profile from "./Modules/Profile/profile";
import LoginPage from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import AcademicPage from "./Modules/Academic/index";
import ValidateAuth from "./helper/validateauth";

// eslint-disable-next-line import/no-unresolved
import ScholarshipPage from "./Modules/Scholarship/user/pages/ScholarshipPage";
// eslint-disable-next-line import/no-unresolved
import ScholarStatusPage from "./Modules/Scholarship/user/pages/ScholarshipStatusPage";
// eslint-disable-next-line import/no-unresolved
import Convenor from "./Modules/Scholarship/convenor/pages/Convenor";

import InviteApplications from "./Modules/Scholarship/convenor/forms/inviteApplications";
import MCM_Applications from "./Modules/Scholarship/convenor/components/MCM_Applications";
import Medal_applications from "./Modules/Scholarship/convenor/components/medal_applications";
import ConvenorBreadcumbs from "./Modules/Scholarship/convenor/components/ConvenorBreadcumbs";

import BrowseApplicationPage from "./Modules/Scholarship/user/pages/BrowseApplicationPage";
import UserBreadcrumbs from "./Modules/Scholarship/user/components/UserBreadcumbs";

import InactivityHandler from "./helper/inactivityhandler";

export default function App() {
  const location = useLocation();
  const role = useSelector((state) => state.user.role);
  return (
    <MantineProvider>
      <Notifications position="top-center" autoClose={2000} limit={1} />
      {location.pathname !== "/accounts/login" && <ValidateAuth />}
      {location.pathname !== "/accounts/login" && <InactivityHandler />}

      <Routes>
        <Route path="/" element={<Navigate to="/accounts/login" replace />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/academics"
          element={
            <Layout>
              <AcademicPage />
            </Layout>
          }
        />

        {/* scholarship */}
        {/* user routes */}

        <Route
          path="/scholarship"
          element={
            <Layout>
              {role === "spacsconvenor" && (
                <>
                  <ConvenorBreadcumbs />
                  
                </>
              )}
              {role === "student" && (
                <>
                  <UserBreadcrumbs />
                </>
              )}
              {role === "spacsassistant" && (
                <>
                  <ConvenorBreadcumbs />
                  
                </>
              )}
            </Layout>
          }
        />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </MantineProvider>
  );
}
