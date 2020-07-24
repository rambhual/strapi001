module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    tracing: false,
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 50,
  },
});
