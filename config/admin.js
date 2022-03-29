module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ee23abfd3a463ca818b0837f8e9646c'),
  },
});
