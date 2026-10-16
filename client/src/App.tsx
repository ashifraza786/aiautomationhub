import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";

import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Home from "./pages/Home";
import LeadsDashboard from "./pages/LeadsDashboard";
import StartProject from "./pages/StartProject";
import Solutions from "./pages/Solutions";
import AIAutomation from "./pages/solutions/AIAutomation";
import CustomSoftware from "./pages/solutions/CustomSoftware";
import ERPBusinessSystems from "./pages/solutions/ERPBussinessSystem";
import WebsitesDigitalSolutions from "./pages/solutions/WebsitesDigitalSolutions";
import BusinessGrowth from "./pages/solutions/BussinessGrowth";
import BusinessWebsiteCaseStudy from "@/pages/BussinessWebsiteCaseStudy";
import Technology from "./pages/Technology";
import ERPCaseStudy from "@/pages/ERPCaseStudy";
import Process from "./pages/Process";
import About from "./pages/About";
import Work from "./pages/Work";

function Router() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />

          <Route path="/solutions" component={Solutions} />
          <Route path="/solutions/ai-automation" component={AIAutomation} />
          <Route path="/solutions/custom-software" component={CustomSoftware} />
          <Route
            path="/solutions/erp-business-systems"
            component={ERPBusinessSystems}
          />
          <Route
            path="/solutions/websites-digital-solutions"
            component={WebsitesDigitalSolutions}
          />
          <Route path="/solutions/business-growth" component={BusinessGrowth} />

          <Route path="/technology" component={Technology} />
          <Route path="/work" component={Work} />
          <Route path="/process" component={Process} />
          <Route path="/about" component={About} />

          <Route path="/start-project" component={StartProject} />
          <Route path="/leads" component={LeadsDashboard} />
          
          <Route
            path="/work/business-website-digital-store"
            component={BusinessWebsiteCaseStudy}
          />
          <Route path="/work/erp-management-system" component={ERPCaseStudy} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors closeButton position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
