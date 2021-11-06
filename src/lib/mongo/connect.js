import mongoose from "mongoose";

const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

const connection = {};
export const connect = async () => {
	if (connection.isConnected) {
		return;
	}

	const db = await mongoose.connect(process.env.MONGODB_URI, options);

	connection.isConnected = db.connections[0].readyState;
	console.log("is connected", connection.isConnected);
};

export default connect;
