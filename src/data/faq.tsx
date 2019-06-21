import React from 'react'

import { FAQ } from '../templates/cruip-sienna/faq'

const faqs: FAQ[] = [
  {
    question: <span>What if I need more notifications/mo. or users?</span>,
    answer: (
      <p>
        We&lsquo;re happy to customize a plan that will fit your needs if you need to
        send more than 2M notifications per month or require more than 5 users.
        Please <a href="mailto:sales@trycourier.com">contact our sales team</a>{' '}
        for more information!
      </p>
    ),
  },
  {
    question: <span>Is Courier only for engineering teams?</span>,
    answer: (
      <p>
        Not at all! While Courier is built with engineering teams in mind, a key
        benefit that Courier provides is empowering non-engineers with the
        ability to configure your product&lsquo;s notification strategy and build or
        customize messages across all of your channels &mdash; without needing
        an engineer to be involved.
      </p>
    ),
  },
  {
    question: (
      <span>
        Do I have to switch from my current provider? e.g. Twilio, SendGrid,
        etc.
      </span>
    ),
    answer: (
      <p>
        No. Courier routes notifications to the best provider, but does not
        deliver the actual notification. Keep your existing providers and add
        your API keys into Integrations panel in the Courier administration UI.
      </p>
    ),
  },
  {
    question: <span>Is Courier GDPR compliant?</span>,
    answer: <p>Yes. Courier is GDPR compliant.</p>,
  },
  {
    question: <span>How do I talk to someone who works at Courier?</span>,
    answer: (
      <p>
        Send us an email at{' '}
        <a href="mailto:contact@trycourier.com">contact@trycourier.com</a> –
        talk to you soon!
      </p>
    ),
  },
]

export default faqs
