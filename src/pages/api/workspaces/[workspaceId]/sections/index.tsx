import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Section from "src/models/Section";

connect();

export default async (req, res) => {
	const {
		method,
		query: { id },
	} = req;

	let cards;
	switch (method) {
		case "GET":
			try {
				cards = await Section.find({});

				if (!cards) {
					return res.status(400).json({});
				}

				res.status(200).json({ success: true, data: cards });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			cards = await Section.create(req.body);

			break;

		default:
			break;
	}
};
