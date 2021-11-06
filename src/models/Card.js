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
});

module.exports = mongoose.models.Card || mongoose.model("Card", CardSchema);
