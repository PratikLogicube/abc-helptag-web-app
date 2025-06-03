const config = {
  env: {
    apiEndPoint:
      process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:3000",
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.PRIVATE_KEY!,
    },
  },
};

export default config;
