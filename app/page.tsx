import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <Hero
        title="Convert Text to PNG with PixText"
        subtitle="Compress and convert your text into compact, optimized PNG images. Perfect for AI models that process images."
        ctaText="Get Started"
        ctaHref="/features"
      />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why PixText?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Processing',
                description: 'Convert large text blocks in seconds',
              },
              {
                title: 'Compact Output',
                description: 'Optimized PNG files that are AI-friendly',
              },
              {
                title: 'Easy to Use',
                description: 'Simple, intuitive interface for everyone',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
