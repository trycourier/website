const sharp = require("sharp");

const init = async () => {
  const roundedCorners = Buffer.from(
    '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
  );

  const textSvg = new Buffer(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="100" viewBox="0 0 1000 100">

        <text x="0" y="50" font-family="Helvetica" fill="white" font-size="40" letter-spacing="1px">
          "Dynamic Open Graph Images for Gatsby Posts"
        </text>

        <text x="0" y="100" font-family="Helvetica" fill="grey" font-size="24px">
          April 22nd, 2020
        </text>
    </svg>`
  );

  sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 200, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .composite([
      { input: "./src/templates/courier-bg.png", top: 0, left: 0 },
      { input: textSvg, top: 100, left: 20 },
      { input: "./src/images/courier-logo.svg", top: 20, left: 20 },
      { input: "./src/data/avatars/courier.png", top: 560, left: 1125 },
    ])
    .png()
    .toFile("output.png", (err, info) => {
      console.log("!", err);
      console.log(">", info);
    });
};

init();
