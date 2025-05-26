
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Vision from "./pages/Vision";
import BoardMembers from "./pages/BoardMembers";
import Team from "./pages/Team";
import Advisory from "./pages/Advisory";
import Certificates from "./pages/Certificates";
import WhatsNew from "./pages/WhatsNew";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import School from "./pages/School";
import SchoolDetail from "./pages/SchoolDetail";
import Awards from "./pages/Awards";
import AwardDetail from "./pages/AwardDetail";
import Sports from "./pages/Sports";
import News from "./pages/News";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/board-members" element={<BoardMembers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/advisory" element={<Advisory />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/whats-new" element={<WhatsNew />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/school" element={<School />} />
              <Route path="/school-details" element={<SchoolDetail />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/awards/:id" element={<AwardDetail />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/news" element={<News />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
