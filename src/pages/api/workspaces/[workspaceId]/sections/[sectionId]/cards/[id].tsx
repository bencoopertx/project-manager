import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Card from "src/models/Card";

connect();

export default async (req, res) => {
	const {
		method,
		query: { id, sectionId },
	} = req;

	let card;
	switch (method) {
		case "GET":
			try {
				card = await Card.findById(id);

				if (!card) {
					return res.status(400).json({});
				}

				res.status(200).json({ success: true, data: card });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		case "DELETE":
			try {
				card = await Card.deleteOne({ _id: req.body._id });

				if (!card) {
					return res.status(400).json({ success: false });
				}

				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		case "PUT":
			try {
				const oldCard = await Card.findById(id);
				card = await Card.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

				if (oldCard.index != card.index || oldCard.sectionId != card.sectionId) {
					console.log("incrementing");
					await Card.updateMany({ sectionId: card.sectionId, index: { $gt: card.index } }, { $inc: { index: 1 } });
				}

				if (!card) {
					return res.status(400).json({ success: false });
				}

				res.status(200).json({ success: true, data: card });
			} catch (error) {
				res.status(400).json({ success: false });
			}

		default:
			break;
	}
};
