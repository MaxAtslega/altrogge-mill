/** @type {import('next').NextConfig} */
const withImage = require("next-images")

module.exports = withImage({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: ["img.shields.io"],
  },
})
