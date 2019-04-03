const setup = () => {
  const ScrollReveal = require('scrollreveal').default
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    const sr = ScrollReveal()

    sr.reveal('.hero-shapes', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
    })

    sr.reveal('.header-sun', {
      delay: 200,
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
    })

    sr.reveal('.hero-media', {
      delay: 200,
      duration: 1000,
      rotate: {
        y: 50,
      },
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    })

    sr.reveal('.feature-extended-image', {
      duration: 600,
      scale: 0.9,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      viewFactor: 0.5,
    })

    sr.reveal(
      document.querySelectorAll('.testimonial, .pricing-table'),
      {
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        viewFactor: 0.5,
      },
      1000
    )
  }

  // Accordion component
  const accordionEl = document.getElementsByClassName('accordion-title')

  if (accordionEl.length) {
    for (let i = 0; i < accordionEl.length; i++) {
      accordionEl[i].addEventListener('click', function(this: Element) {
        if (!this.parentNode) return
        ;(this.parentNode as Element).classList.toggle('is-open')

        const panel = this.nextElementSibling as HTMLElement
        if (!panel) return
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`
        }
      })
    }
  }
}

const checkSetup = () => {
  const TRY_AGAIN = 100
  if (document.body.classList.contains('has-animations')) {
    setup()
  } else {
    setTimeout(checkSetup, TRY_AGAIN)
  }
}

// don't run on server-side
if (typeof window !== 'undefined') {
  checkSetup()
}
