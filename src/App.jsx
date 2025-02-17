import { Routes, Route } from "react-router";
import LandingPage from "./Pages/Landingpage";
import JobCategoryPage from "./Pages/JobCategoryPage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import Layout from "./layouts/Layout";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="jobs/:category" element={<JobCategoryPage />} />
        <Route path="job/:id" element={<JobDetailsPage />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
