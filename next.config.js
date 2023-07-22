/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  env: {
    GUEST_USER_EMAIL: "airbnb_guestuser@gmail.com",
    GUEST_USER_PASSWORD: "airbnb_guestuser"
  }
};

module.exports = nextConfig;
