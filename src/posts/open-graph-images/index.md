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

Stumbling across on of the better Node.js image processing libraries, and realized it's already a part of our dependencies, that's a plus. Let's just use what we got.


### Developing with Sharp

When trying to run `sharp` separately, I got the following error: 
```
Error: Found vendored libvips v8.8.1 but require v8.9.1. Please remove the 'node_modules/sharp/vendor' directory and run 'npm install'.
```

A little removal of the `sharp/` directory within my  `node_modules/` and a `yarn add sharp` and we were back up and ready to go.

### SVG Manipulation

Px Push
Font Dependencies (Environments)

### Tying back to Gatsby Builds

https://github.com/lovell/sharp
https://github.com/ChristopherBiscardi/gatsby-plugins/blob/master/packages/gatsby-plugin-printer/gatsby-node.js
https://github.com/jlengstorf/get-share-image/blob/master/src/index.ts
