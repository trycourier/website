import React from 'react'
import classnames from 'classnames'

export type PricingPlan = {
  isPrimary: boolean
  title: string
  currency: string
  amount: number
  frequency: string
  features: React.ReactNode[]
  callToAction?: React.ReactNode
}

export type PricingParams = {
  plans: PricingPlan[]
}

const planClass = (isPrimary: boolean) =>
  classnames('pricing-table', 'is-revealing', {
    'pricing-table-primary': isPrimary,
    'text-light': isPrimary,
  })

const PricingComponent: React.FunctionComponent<PricingParams> = ({
  plans,
}) => (
  <section id="pricing" className="pricing section">
    <div className="container">
      <div className="pricing-inner section-inner">
        <h2 className="section-title mt-0 text-center">Pricing</h2>
        <div className="pricing-tables-wrap">
          {plans.map((plan, idx) => (
            <div className={planClass(plan.isPrimary)} key={idx}>
              <div className="pricing-table-inner">
                <div className="pricing-table-main">
                  <div className="pricing-table-header">
                    <div className="pricing-table-title mt-12 mb-16">
                      {plan.title}
                    </div>
                    <div className="pricing-table-price pb-32">
                      <span className="pricing-table-price-currency h3">
                        {plan.currency}
                      </span>
                      <span className="pricing-table-price-amount h1">
                        {plan.amount}
                      </span>{' '}
                      / {plan.frequency}
                    </div>
                  </div>
                  {plan.features && plan.features.length ? (
                    <ul className="pricing-table-features list-reset text-xs">
                      {plan.features.map((feature, idx2) => (
                        <li key={idx2}>{feature}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {plan.callToAction && (
                  <div className="pricing-table-cta">{plan.callToAction}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default PricingComponent
