/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DB_CNN: process.env.DB_CNN,
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED
  }
};
