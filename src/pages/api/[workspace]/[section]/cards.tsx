import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Card from "src/models/Card";

connect();

export default async (req, res) => {
	const { method } = req;

	let card;
	switch (method) {
		case "GET":
			const todos = await Card.find({});

			res.json(todos);
			break;
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
