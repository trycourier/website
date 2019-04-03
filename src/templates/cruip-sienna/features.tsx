import React from 'react'

export type Feature = {
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
}

export type FeaturesParams = {
  title: React.ReactNode
  description?: React.ReactNode
  features: Feature[]
}

const FeaturesComponent: React.FunctionComponent<FeaturesParams> = ({
  title,
  description,
  features,
}) => (
  <section id="features" className="features-extended section">
    <div className="container">
      <div className="features-extended-inner section-inner has-top-divider">
        <div className="features-extended-header text-center">
          <div className="container-sm">
            <h2 className="section-title mt-0">{title}</h2>
            {description ? (
              <p className="section-paragraph">{description}</p>
            ) : null}
          </div>
        </div>

        {features.map((feature, idx) => (
          <div className="feature-extended" key={idx}>
            <div className="feature-extended-image is-revealing">
              {feature.graphic}
            </div>
            <div className="feature-extended-body">
              <h3 className="mt-0">{feature.title}</h3>
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesComponent
