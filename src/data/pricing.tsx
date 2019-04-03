import React from 'react'

import { PricingPlan } from '../templates/cruip-sienna/pricing'

const plans: PricingPlan[] = [
  {
    isPrimary: false,
    title: 'Free Forever!',
    currency: '$',
    amount: 0,
    frequency: 'mo.',
    features: [
      <span>10K notifications / mo.</span>,
      <span>1 user</span>,
      <span>Courier UI Kit</span>,
    ],
    // callToAction: <a className="button button-primary button-shadow button-block" href="/">Get started</a>
  },

  {
    isPrimary: true,
    title: 'Team',
    currency: '$',
    amount: 99,
    frequency: 'mo.',
    features: [
      <span>500K notifications / mo.</span>,
      <span>3 users</span>,
      <span>Courier UI Kit</span>,
      <span>Dynamic Templates</span>,
    ],
    // callToAction: <a className="button button-shadow button-block" href="/">Get started</a>
  },

  {
    isPrimary: false,
    title: 'Business',
    currency: '$',
    amount: 499,
    frequency: 'mo.',
    features: [
      <span>2M notifications / mo.</span>,
      <span>5 users</span>,
      <span>Courier UI Kit</span>,
      <span>Dynamic Templates</span>,
      <span>Serverless Functions</span>,
      <span>Notification Center</span>,
    ],
    // callToAction: <a className="button button-primary button-shadow button-block" href="/">Get started</a>
  },
]

export default plans
