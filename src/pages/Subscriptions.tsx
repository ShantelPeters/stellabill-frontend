import SubscriptionCard, { SubscriptionData } from '../components/SubscriptionCard';

// Mock data - replace with API call
const mockSubscriptions: SubscriptionData[] = [
  {
    id: 'SUB-001',
    planName: 'Premium Access',
    merchant: 'Stellar News',
    status: 'active',
    price: 10,
    currency: 'USDC',
    interval: 'month',
    prepaidBalance: 30,
    coverage: 3,
    nextChargeDate: 'Mar 15, 2026',
    icon: '📰'
  },
  {
    id: 'SUB-002',
    planName: 'Pro Plan',
    merchant: 'CloudFlow',
    status: 'active',
    price: 25,
    currency: 'USDC',
    interval: 'month',
    prepaidBalance: 75,
    coverage: 3,
    nextChargeDate: 'Mar 20, 2026',
    icon: '☁️'
  }
];

export default function Subscriptions() {
  const subscriptions = mockSubscriptions;
  const isLoading = false;

  return (
    <div>
      <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', color: '#ffffff' }}>My Subscriptions</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
        Manage your active subscriptions and view payment details.
      </p>

      {isLoading ? (
        <div className="subscriptions-loading">
          <div className="loading-spinner" role="status" aria-label="Loading subscriptions" />
        </div>
      ) : subscriptions.length === 0 ? (
        <div className="subscriptions-empty">
          <p>No subscriptions yet. Subscribe to a plan to get started.</p>
        </div>
      ) : (
        <div className="subscriptions-grid">
          {subscriptions.map((subscription) => (
            <SubscriptionCard key={subscription.id} subscription={subscription} />
          ))}
        </div>
      )}
    </div>
  );
}
