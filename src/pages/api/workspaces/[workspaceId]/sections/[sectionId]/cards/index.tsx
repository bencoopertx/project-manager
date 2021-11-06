import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Card from "src/models/Card";

connect();

export default async (req, res) => {
	const {
		method,
		query: { id, sectionId },
	} = req;

	let cards;
	switch (method) {
		case "GET":
			try {
				cards = await Card.find({ sectionId: sectionId }).sort({
					index: 1,
				});

				if (!cards) {
					return res.status(400).json({});
				}

				res.status(200).json({ success: true, data: cards });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			cards = await Card.create(req.body);

			break;

		default:
			break;
	}
};
