import 'dotenv/config'; // load all environment variables to process.env

export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
