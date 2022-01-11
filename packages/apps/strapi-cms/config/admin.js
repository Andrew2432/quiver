module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4e0bc76532d51d9b2fef1782d064a138'),
  },
});
