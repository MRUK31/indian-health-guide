
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PolicyFinder from "./pages/PolicyFinder";
import PolicyDetails from "./pages/PolicyDetails";
import Appointments from "./pages/Appointments";
import GovernmentPolicies from "./pages/GovernmentPolicies";
import PrivatePolicies from "./pages/PrivatePolicies";
import AboutUs from "./pages/AboutUs";
import MedicalRecords from "./pages/MedicalRecords";
import HospitalServices from "./pages/HospitalServices";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientRegistration from "./pages/PatientRegistration";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/policy-finder" element={<PolicyFinder />} />
          <Route path="/policies/government" element={<GovernmentPolicies />} />
          <Route path="/policies/government/:id" element={<PolicyDetails />} />
          <Route path="/policies/private" element={<PrivatePolicies />} />
          <Route path="/policies/private/:id" element={<PolicyDetails />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/services" element={<HospitalServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
