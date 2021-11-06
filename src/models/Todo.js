const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		maxlength: [256, "Cannot be more than 256 characters"],
	},
	id: {
		type: String,
		required: [true, "Please add an ID"],
		unique: true,
	},
});
