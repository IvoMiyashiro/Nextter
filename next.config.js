/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DB_CNN: process.env.DB_CNN,
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED,
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL
  },
  async headers() {
    return [{
      source: '/auth/renew.ts',
      headers: [
        {
          key: 'x-token',
          value: ''
        }
      ]
    }];
  },
  images: {
    domains: ['res.cloudinary.com']
  }
};
