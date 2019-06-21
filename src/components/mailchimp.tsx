import React from 'react'

import './mailchimp.scss'

const mailchimpUrl = process.env.GATSBY_MAILCHIMP_URL
const mailchimpFakeId = process.env.GATSBY_MAILCHIMP_FAKE_ID || ''
const placeholder = 'name@company.com'

type MailchimpFakeFieldParams = {
  name: string
}

const MailchimpFakeField = ({ name }: MailchimpFakeFieldParams) => (
  <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
    <input type="text" name={name} tabIndex={-1} />
  </div>
)

const Mailchimp = () => (
  <section id="newsletter-signup" className="section">
    <div className="container">
      <div className="section-inner">
        <p style={{ maxWidth: 800, margin: '0 auto 10px auto' }}>
          We&lsquo;re working hard to make <strong>Courier</strong> available to
          everyone. If you&lsquo;d like to join the next group of customers, enter
          your email below and we&lsquo;ll let you know when its time for another
          visit.
        </p>

        <form
          action={mailchimpUrl}
          method="post"
          className="newsletter-signup-form"
          target="_blank"
          noValidate={true}
        >
          <MailchimpFakeField name={mailchimpFakeId} />
          <input type="email" name="EMAIL" placeholder={placeholder} />
          <input
            type="submit"
            value="Join waitlist!"
            name="subscribe"
            className="button button-primary button-shadow"
          />
        </form>
      </div>
    </div>
  </section>
)

export default Mailchimp
