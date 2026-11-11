import Card from '../components/Card'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Powerful Features
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to convert text to PNG efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Fast Conversion',
              description:
                'Convert text to PNG in milliseconds using our optimized engine.',
            },
            {
              title: 'AI-Optimized Output',
              description:
                'PNG images designed specifically for AI model processing.',
            },
            {
              title: 'Batch Processing',
              description: 'Convert multiple files at once to save time.',
            },
            {
              title: 'RESTful API',
              description: 'Integrate PixText into your workflow with our API.',
            },
            {
              title: 'Custom Styling',
              description: 'Customize fonts, colors, and formatting options.',
            },
            {
              title: 'No Code Required',
              description: 'Use our web interface without writing any code.',
            },
          ].map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-teal-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-600">
            Start converting text to PNG with PixText. Try it free for 7 days.
          </p>
        </div>
      </div>
    </main>
  )
}
