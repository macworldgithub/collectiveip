import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PracticesPage from "./pages/PracticesPage";
import PartnerServicesPage from "./pages/PartnerServicesPage";
import VendorsPage from "./pages/VendorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import IntelligentAutomationPage from "./pages/IntelligentAutomationPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import DemoPage from "./pages/DemoPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practices" element={<PracticesPage />} />
        <Route path="/partner-services" element={<PartnerServicesPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route
          path="/intelligent-automation"
          element={<IntelligentAutomationPage />}
        />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
