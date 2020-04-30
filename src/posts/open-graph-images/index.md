---
title: "Dynamic Open Graph Images for Gatsby Posts"
date: "2020-04-22"
thumbnail: "https://www.placekeanu.com/220/160"
headerImage: "https://placekeanu.com/1000/450"
socialImage: "https://placekeanu.com/1200/630"
author: justin
tags:
  - Gatsby
  - Node
---

### Research

I did a decent amount of research on the topic, pretty much every solution required puppeteer, which I've used before and thought of a little overkill. I don't really want to be taking screenshots at this point, although I think that's a great idea for other cases.

Stumbling across on of the better Node.js image processing libraries, and realized it's already a part of our dependencies, that's a plus.

Let's just use what we got.

### Developing with Sharp

When trying to run `sharp` separately, I got the following error:

```
Error: Found vendored libvips v8.8.1 but require v8.9.1. Please remove the 'node_modules/sharp/vendor' directory and run 'npm install'.
```

A little removal of the `sharp/` directory within my `node_modules/` and a `yarn add sharp` and we were back up and ready to go.

First Step is to create a sharp image instance of our targeted size:

I'm going with a 1200x630 like said in spec, with 4 channels (RGBA) and giving it the oh so familiar debug red:

```javascript
sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 },
  },
})
```

After this I will add on layers and "composite" them onto my image.
Each layer can be either an SVG element via `Buffer` or a PNG, of which both can also be imported through it's file path.

```javascript
.composite([
  { input: "./src/templates/courier-bg.png", top: 0, left: 0 },
  { input: textSvg, top: 100, left: 20 },
  { input: "./src/images/courier-logo.svg", top: 20, left: 20 },
  { input: "./src/data/avatars/courier.png", top: 560, left: 1125 },
])
```

### SVG Manipulation

Px Push
Font Dependencies (Environments)
...

### Tying back to Gatsby Builds

...

### Thanks + Inspo

- https://github.com/lovell/sharp
- https://github.com/ChristopherBiscardi/gatsby-plugins/blob/master/packages/gatsby-plugin-printer/
- https://github.com/jlengstorf/get-share-image/
