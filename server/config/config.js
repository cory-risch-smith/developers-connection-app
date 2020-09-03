/** @format */

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8085,
  MongoUrl: 'mongodb://127.0.0.1:27017/developersConnection',
  // 'mongodb+srv://dbAdmin:Dax123@developersconnection.79v3a.mongodb.net/developerConnection?retryWrites=true&w=majority',
  mongoOPT: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  JWTKey: 'I_AM_THE_kEY_FOR_LOCK',
  CRYPTOKey: 'I_AM_THE_CRYPTO_KEY_FOR',
};

export default config;
