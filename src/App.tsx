import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PracticesPage from "./pages/PracticesPage";
import PartnerServicesPage from "./pages/PartnerServicesPage";
import VendorsPage from "./pages/VendorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import IntelligentAutomationPage from "./pages/IntelligentAutomationPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import DemoPage from "./pages/DemoPage";
import BrandedDemoPage from "./pages/BrandedDemoPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DataPolicyPage from "./pages/DataPolicyPage";
import LeadershipPage from "./pages/LeadershipPage";

// Practice Detail Pages
import PracticeConnectivityPage from "./pages/PracticeConnectivityPage";
import PracticeCloudDCPage from "./pages/PracticeCloudDCPage";
import PracticeEndpointPage from "./pages/PracticeEndpointPage";
import RealState from "./pages/RealState";
import Banking from "./pages/Banking";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practices" element={<PracticesPage />} />
        <Route
          path="/practices/connectivity"
          element={<PracticeConnectivityPage />}
        />
        <Route
          path="/practices/automation"
          element={<IntelligentAutomationPage />}
        />
        <Route
          path="/practices/cloud-dc-compute"
          element={<PracticeCloudDCPage />}
        />
        <Route
          path="/practices/cloud-services"
          element={<PracticeCloudDCPage />}
        />
        <Route
          path="/practices/data-centre"
          element={<PracticeCloudDCPage />}
        />
        <Route
          path="/practices/endpoint-infrastructure"
          element={<PracticeEndpointPage />}
        />
        <Route path="/partner-services" element={<PartnerServicesPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route
          path="/intelligent-automation"
          element={<IntelligentAutomationPage />}
        />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/demo/:slug" element={<BrandedDemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/data-policy" element={<DataPolicyPage />} />
        <Route path="/real-estate" element={<RealState />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
