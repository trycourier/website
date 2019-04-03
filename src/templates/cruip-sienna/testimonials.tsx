import React from 'react'

export type Testimonial = {
  name: React.ReactNode
  alt: string
  imageSrc: string
  link: React.ReactNode
  body: React.ReactNode
}

export type TestimonialsParams = {
  testimonials: Testimonial[]
}

const TestimonialsComponent: React.FunctionComponent<TestimonialsParams> = ({
  testimonials,
}) => (
  <section id="testimonials" className="testimonials section">
    <div className="container">
      <div className="testimonials-inner section-inner">
        <h2 className="section-title mt-0 text-center">Testimonials</h2>
        <div className="testimonials-wrap">
          {testimonials.map((testimonial, idx) => (
            <div
              className="testimonial text-center text-xs is-revealing"
              key={idx}
            >
              <div className="testimonial-inner">
                <div className="testimonial-main">
                  <div className="testimonial-header">
                    <img
                      className="mb-16"
                      src={testimonial.imageSrc}
                      alt={testimonial.alt}
                    />
                  </div>
                  <div className="testimonial-body">{testimonial.body}</div>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-link">{testimonial.link}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TestimonialsComponent
