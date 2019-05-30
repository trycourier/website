import React from 'react'

import content from '../data/content'
import clients from '../data/clients'
import features from '../data/features'
import testimonials from '../data/testimonials'
import pricingPlans from '../data/pricing'
import faqs from '../data/faq'

import SEO from '../components/seo'
import Mailchimp from '../components/mailchimp'

import Template from '../templates/cruip-sienna'
import Hero from '../templates/cruip-sienna/hero'
import Clients from '../templates/cruip-sienna/clients'
import Features from '../templates/cruip-sienna/features'
import Testimonials from '../templates/cruip-sienna/testimonials'
import Pricing from '../templates/cruip-sienna/pricing'
import FAQ from '../templates/cruip-sienna/faq'

import './index.scss'

export default () => (
  <Template
    headerLogo={content.headerLogoLink}
    footerLogo={content.footerLogoLink}
    copyright={content.copyright}
    footerLinks={content.footerLinks}
    socialLinks={content.socialLinks}
  >
    <SEO title={content.homepageTitle} />

    <div className="login">
      <a href="https://www.trycourier.app">Login</a>
    </div>

    <Hero screenshot={content.heroScreenshot}>
      <h1 className="hero-title mt-0">{content.heroTitle}</h1>
      <p className="hero-paragraph">{content.heroDescription}</p>
      <p className="hero-cta" style={{ position: 'relative', zIndex: 99 }}>
        {content.heroCTA}
      </p>
    </Hero>

    <Clients clients={clients} />
    <Features
      title={content.featuresTitle}
      description={content.featuresDescription}
      features={features}
    />
    <Testimonials testimonials={testimonials} />

    <Pricing plans={pricingPlans} />
    <Mailchimp />

    <FAQ faqs={faqs} />
  </Template>
)
