const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5000,
	MongoUrl:
		'mongodb+srv://dbAdmin:Dax123@developersconnection.79v3a.mongodb.net/developerConnection?retryWrites=true&w=majority',
	mongoOPT: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
};

export default config;
