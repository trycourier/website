import React from 'react'

import ImgHugoDone from '../images/hugo-done.png'
import ImgHugoMessageSent from '../images/hugo-message-sent.png'
import ImgHugoWaiting from '../images/hugo-waiting.png'

import { Feature } from '../templates/cruip-sienna/features'

// illustrations from: https://icons8.com/ouch

const features: Feature[] = [
  {
    title: 'Omnichannel Delivery',
    description: (
      <p>
        A single REST API to publish notifications to any channel.{' '}
        <strong>Connect your existing providers</strong> to Courier and we'll
        route the message to the <em>best</em> provider for that user.
        <br />
        <br />
        Email. SMS. Mobile Push. Desktop Push. Chat. Social Media.
      </p>
    ),
    graphic: <img src={ImgHugoMessageSent} alt="Omnichannel Delivery illustration" />,
  },
  {
    title: 'Visual Editing',
    description: (
      <p>
        Save time by using our <strong>Omnichannel Visual Editor</strong> to
        create a single message that is reusable across all channels, or tweak
        the message for each specific channel if you'd prefer.
      </p>
    ),
    graphic: <img src={ImgHugoWaiting} alt="Visual Editing illustration" />,
  },
  {
    title: 'Fully Programmable',
    description: (
      <p>
        Enrich your notifications with external data using our{' '}
        <strong>serverless functions</strong>. Develop sophisticated messages
        using React.js in our in-browser{' '}
        <strong>dynamic template editor</strong>.
      </p>
    ),
    graphic: <img src={ImgHugoDone} alt='Fully Programmable illustration' />,
  },
]

export default features
