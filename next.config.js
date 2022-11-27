/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
}
