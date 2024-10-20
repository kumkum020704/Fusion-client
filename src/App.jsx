/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
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
import UserBreadcumbs from "./Modules/Scholarship/user/components/UserBreadcumbs";
// eslint-disable-next-line import/no-unresolved
import Convenor from "./Modules/Scholarship/convenor/pages/Convenor";
import AwardsAndScholarshipCatalogC from "./Modules/Scholarship/convenor/components/AwardsAndScholarshipCatalogC";
import InviteApplications from "./Modules/Scholarship/convenor/forms/inviteApplications";
import MCM_Applications from "./Modules/Scholarship/convenor/components/MCM_Applications";
import Medal_applications from "./Modules/Scholarship/convenor/components/medal_applications";
import ConvenorBreadcumbs from "./Modules/Scholarship/convenor/components/ConvenorBreadcumbs";
import DocumentUploadForm2 from "./Modules/Scholarship/Convocation/DocumentUploadForm2";
import DirectorSilver from "./Modules/Scholarship/Convocation/DirectorSilver";
import ConvocationMedal from "./Modules/Scholarship/Convocation/ConvocationMedal";
import ScholarshipForm from "./Modules/Scholarship/MCM_Application/ScholarshipForm";
import DocumentUploadForm from "./Modules/Scholarship/MCM_Application/DocumentUploadForm";

export default function App() {
  const location = useLocation();
  return (
    <MantineProvider>
      <Notifications
        position="top-right"
        zIndex={1000}
        autoClose={2000}
        limit={1}
      />
      {location.pathname !== "/accounts/login" &&
        location.pathname !== "/reset-password" && <ValidateAuth />}
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
              <ScholarshipPage />
            </Layout>
          }
        />
        <Route
          path="/user/browseApplication"
          element={
            <Layout>
              <UserBreadcumbs />
            </Layout>
          }
        />
        <Route
          path="/user/scholarshipStatus"
          element={
            <Layout>
              <ScholarStatusPage />
            </Layout>
          }
        />
        {/* convenor routes */}
        <Route
          path="/convenor/awards"
          element={
            <Layout>
              <ConvenorBreadcumbs />
              <Convenor />
            </Layout>
          }
        />
        <Route
          path="/convenor/members"
          element={
            <Layout>
              <ConvenorBreadcumbs />
              <Convenor />
            </Layout>
          }
        />
        <Route
          path="/convenor/invite"
          element={
            <Layout>
              <ConvenorBreadcumbs />
              <InviteApplications />
            </Layout>
          }
        />
        <Route
          path="/convenor/MCM_application"
          element={
            <Layout>
              <ConvenorBreadcumbs />
              <MCM_Applications />
            </Layout>
          }
        />
        <Route
          path="/convenor/Medal_applications"
          element={
            <Layout>
              <ConvenorBreadcumbs />
              <Medal_applications />
            </Layout>
          }
        />
        <Route
          path="/ConvocationMedal"
          element={
            <Layout>
              <UserBreadcumbs></UserBreadcumbs>
              <ConvocationMedal />
            </Layout>
          }
        />
        <Route
          path="/DirectorSilver"
          element={
            <Layout>
              <UserBreadcumbs></UserBreadcumbs>
              <DirectorSilver />
            </Layout>
          }
        />
        <Route
          path="/DocumentUploadForm2"
          element={
            <Layout>
              <UserBreadcumbs></UserBreadcumbs>
              <DocumentUploadForm2 />
            </Layout>
          }
        />
        // Rakshit's Route
        <Route
          path="/ScholarshipForm"
          element={
            <Layout>
              <UserBreadcumbs></UserBreadcumbs>
             <ScholarshipForm/>
            </Layout>
          }
        />
        <Route
          path="/scholar2"
          element={
            <Layout>
             <UserBreadcumbs></UserBreadcumbs>
             <DocumentUploadForm/>
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </MantineProvider>
  );
}
