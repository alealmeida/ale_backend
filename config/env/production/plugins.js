module.exports = {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 200,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };