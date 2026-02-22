import UsageThisPeriod from '../components/UsageThisPeriod'

export default function Subscriptions() {
  const handleViewFullUsage = () => {
    console.log('Navigate to full usage page')
    // TODO: Navigate to full usage page or expand section
  }

  // Example: Mock subscription data
  const subscription = {
    id: 'sub_123',
    isUsageBased: true, // Only show UsageThisPeriod when true
    usageData: {
      billingPeriod: 'Mar 1 — Mar 31',
      usage: '32450 API calls',
      estimatedCharge: '10 USDC'
    }
  }

  return (
    <div style={{ padding: '1.5rem 2rem', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#e2e8f0' }}>Subscriptions</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        List and manage customer subscriptions. Data will come from the Stellarbill backend.
      </p>
      
      {/* Usage-based subscription detail */}
      {subscription.isUsageBased && (
        <UsageThisPeriod
          billingPeriod={subscription.usageData?.billingPeriod}
          usage={subscription.usageData?.usage}
          estimatedCharge={subscription.usageData?.estimatedCharge}
          onViewFullUsage={handleViewFullUsage}
        />
      )}
    </div>
  )
}
