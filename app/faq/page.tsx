'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is PixText?',
    answer:
      'PixText is a service that converts text into optimized PNG images. It is perfect for AI models that process images instead of text.',
  },
  {
    question: 'How do I convert text to PNG?',
    answer:
      'Simply upload or paste your text into our web interface, customize styling if needed, and download your PNG. It takes just a few seconds.',
  },
  {
    question: 'What formats does PixText support?',
    answer:
      'Currently, PixText outputs PNG images. We support various text encodings and custom styling options.',
  },
  {
    question: 'Can I use the API?',
    answer:
      'Yes! PixText offers a RESTful API for programmatic access. Check our documentation for integration details.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes, we offer a free tier with 100 conversions per month. Upgrade to a paid plan for unlimited access.',
  },
  {
    question: 'What about privacy?',
    answer:
      'We take privacy seriously. Your uploaded text is processed securely and not stored or shared with third parties.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Find answers to common questions about PixText.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`text-teal-600 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-teal-50 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h2>
          <p className="text-gray-600">
            Contact our support team at support@pixtext.com
          </p>
        </div>
      </div>
    </main>
  )
}
