module.exports = {
  cors: {
    enabled: true,
  },
  //
  graphql: {
    endpoint: "/graphql",
    tracing: false,
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 50,
  },
};
