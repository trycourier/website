import React from 'react'

import imgTestimonial1 from '../images/danny-douglass.jpg'
import imgTestimonial2 from '../images/kyla-farrell.jpg'
import imgTestimonial3 from '../images/abraham-polishchuk.jpg'

import { Testimonial } from '../templates/cruip-sienna/testimonials'

const testimonials: Testimonial[] = [
  {
    name: 'Danny Douglass',
    alt: 'Danny Douglass',
    imageSrc: imgTestimonial1,
    body: (
      <p>
        At Winmore we've built communication tools for the world's largest
        logistics companies. Our users are always on-the-go, so notifications
        are critical for us – but we've never been able to get our multi-channel
        strategy to work as well as we'd like. Wish we'd had{' '}
        <strong>Courier</strong> years ago!
      </p>
    ),
    link: <a href="https://www.winmore.app">Winmore</a>,
  },
  {
    name: 'Kyla Farrell',
    alt: 'Kyla Farrell',
    imageSrc: imgTestimonial2,
    body: (
      <p>
        We're just getting started on our first product here at Outer Labs.{' '}
        <strong>Courier</strong> made it simple to add our very first user
        notifications and we're excited to know that there is a lot more power
        waiting for us when we need it.
        <br />
        <br />
        The open source <em>UI Kit</em> was especially helpful &mdash; we were
        able to skip right past re-building the same notification UI we've had
        to recreate so many times in the past.
      </p>
    ),
    link: <a href="http://www.outerlabs.io/">Outer Labs</a>,
  },
  {
    name: 'Abraham Polishchuk',
    alt: 'Abraham Polishchuk',
    imageSrc: imgTestimonial3,
    body: (
      <p>
        Flock was built mobile-first, so we've always focused on mobile push
        notifications. Now that we have added our first web app, we've realized
        that just adding one more channel is a lot more work than you'd think.{' '}
        <strong>Courier</strong> lets us just forget about notifications and get
        back to focusing on our core product.
      </p>
    ),
    link: <a href="https://flockcover.com/">Flock</a>,
  },
]

export default testimonials
