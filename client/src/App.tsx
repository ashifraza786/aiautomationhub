import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LeadsDashboard from "./pages/LeadsDashboard";
import StartProject from "./pages/StartProject";
import Solutions from "./pages/Solutions";
import AIAutomation from "./pages/solutions/AIAutomation";
import CustomSoftware from "./pages/solutions/CustomSoftware";
import ERPBusinessSystems from "./pages/solutions/ERPBussinessSystem";
import WebsitesDigitalSolutions from "./pages/solutions/WebsitesDigitalSolutions";
import BusinessGrowth from "./pages/solutions/BussinessGrowth";
import Technology from "./pages/Technology";
import Process from "./pages/Process";
import About from "./pages/About";
function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Solutions */}
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

      {/* Company */}
      <Route path="/technology" component={Technology} />
      <Route path="/work" component={NotFound} />
      <Route path="/process" component={Process} />
      <Route path="/about" component={About} />

      {/* Conversion */}
      <Route path="/start-project" component={StartProject} />

      {/* Internal */}
      <Route path="/leads" component={LeadsDashboard} />

      {/* Explicit 404 */}
      <Route path="/404" component={NotFound} />

      {/* Catch-all */}
      <Route component={NotFound} />
    </Switch>
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
