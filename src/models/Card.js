const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		maxlength: [256, "Cannot be more than 256 characters"],
	},
	sectionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Section",
	},
	index: {
		type: Number,
		required: [true, "Please add an index"],
		maxLength: [200, "Cannot be more than 200 characters"],
	},
});

module.exports = mongoose.models.Card || mongoose.model("Card", CardSchema);
