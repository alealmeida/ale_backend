 module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 200,
        amountLimit: 200,
        apolloServer: {
          tracing: true,
        },
      },
    },   
  });

  // module.exports = ({ env }) => ({
  //   // ...
  //   upload: {
  //     config: {
  //       provider: 'cloudinary',
  //       providerOptions: {
  //         cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_API_KEY'),
  //       api_secret: env('CLOUDINARY_API_SECRET'),
  //       },
  //       actionOptions: {
  //         upload: {},
  //         delete: {},
  //       },
  //     },
  //   },
  //   // ...
  // });