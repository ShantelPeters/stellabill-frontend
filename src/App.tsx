import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import SubscriptionDetail from './pages/SubscriptionDetail'
import Plans from './pages/Plans'
import UIMockups from './pages/UIMockups'
import LandingPage from './pages/LandingPage'
import OnboardingSuccess from './pages/OnboardingSuccess'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/onboarding-success' element={<OnboardingSuccess />} />

      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/subscriptions/:id' element={<SubscriptionDetail />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/ui-kit' element={<UIMockups />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
