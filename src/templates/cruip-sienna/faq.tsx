import React from 'react'

export type FAQ = {
  question: React.ReactNode
  answer: React.ReactNode
}

export type FAQParams = {
  faqs: FAQ[]
}

const FAQComponent: React.FunctionComponent<FAQParams> = ({ faqs }) => {
  if (!faqs.length) return null
  return (
    <section id="faq" className="pricing section">
      <div className="container">
        <div className="pricing-inner section-inner">
          <h2 className="section-title mt-0 text-center">FAQ</h2>

          <div className="pricing-faqs container-sm">
            <ul className="accordion">
              {faqs.map((faq, idx) => (
                <li key={idx}>
                  <div className="accordion-title">
                    <span>{faq.question}</span>
                    <div className="accordion-icon" />
                  </div>
                  <div className="accordion-body">{faq.answer}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQComponent
