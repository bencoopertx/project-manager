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
	console.log("query", req.query);
	switch (method) {
		case "GET":
			card = await Card.findById(id);

			if (!card) {
				return res.status(400).json({});
			}

			res.status(200).json({ success: true, data: card });
		case "POST":
			card = await Card.create({
				name: req.body.name,
			});

			break;
		case "DELETE":
			card = await Card.deleteOne({ _id: req.body._id });

		case "PUT":
			card = await Card.updateOne({ _id: req.body._id, name: req.body.name });

		default:
			break;
	}
};
