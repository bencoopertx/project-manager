import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Card from "src/models/Card";

connect();

export default async (req, res) => {
	const {
		method,
		query: { id },
	} = req;

	let card;
	switch (method) {
		case "GET":
			try {
				card = await Card.find({});

				if (!card) {
					return res.status(400).json({});
				}

				res.status(200).json({ success: true, data: card });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			card = await Card.create(req.body);

			break;

		default:
			break;
	}
};
