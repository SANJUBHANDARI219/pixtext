import Card from '../components/Card'
import Button from '../components/Button'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that works best for you. Always flexible to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: '$9',
              period: '/month',
              description: 'Perfect for individuals',
              features: ['100 conversions/month', 'Basic support', 'API access'],
              cta: 'Start Free',
            },
            {
              name: 'Professional',
              price: '$29',
              period: '/month',
              description: 'For growing teams',
              features: [
                'Unlimited conversions',
                'Priority support',
                'Advanced API',
                'Batch processing',
              ],
              cta: 'Get Started',
              highlighted: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: '',
              description: 'For large organizations',
              features: [
                'Custom limits',
                'Dedicated support',
                'SLA guarantee',
                'On-premise option',
              ],
              cta: 'Contact Us',
            },
          ].map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlighted ? 'ring-2 ring-teal-500 transform scale-105' : ''
              }
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-600">{tier.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-gray-700 flex items-start">
                    <span className="mr-2 text-teal-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
