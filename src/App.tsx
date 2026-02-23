import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import SubscriptionDetail from './pages/SubscriptionDetail'
import Plans from './pages/Plans'
import UIMockups from './pages/UIMockups'
import Landing from './pages/Landing'
import OnboardingSuccess from './pages/OnboardingSuccess'
import CreatePlan from "./pages/CreatePlan";
<<<<<<< HEAD
=======
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
>>>>>>> 21e9867 (Implement feature comparison table (Free, Pro, Enterprise))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
<<<<<<< HEAD
      <Route path="/onboarding-success" element={<OnboardingSuccess />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/subscriptions" element={<Layout><Subscriptions /></Layout>} />
      <Route path="/subscriptions/:id" element={<Layout><SubscriptionDetail /></Layout>} />
      <Route path="/plans" element={<Layout><Plans /></Layout>} />
      <Route path="/ui-kit" element={<UIMockups />} />
=======
      <Route path="/pricing" element={<Pricing />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/subscriptions"
        element={
          <Layout>
            <Subscriptions />
          </Layout>
        }
      />
      <Route
        path="/plans"
        element={
          <Layout>
            <Plans />
          </Layout>
        }
      />
>>>>>>> 21e9867 (Implement feature comparison table (Free, Pro, Enterprise))
      <Route path="/plans/new" element={<CreatePlan />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
