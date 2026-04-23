import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PracticesPage from './pages/PracticesPage';
import IntelligentAutomationPage from './pages/IntelligentAutomationPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practices" element={<PracticesPage />} />
        <Route path="/intelligent-automation" element={<IntelligentAutomationPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
