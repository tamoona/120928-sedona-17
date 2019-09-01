const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["./source/img/*.{jpg,png}"], {
  destination: "./source/img",
  plugins: [webp({ quality: 75 })]
});
