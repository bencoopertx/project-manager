import clientPromise from "src/lib/mongo/connect";
import connect from "src/lib/mongo/connect";
import Card from "src/models/Card";

connect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			const todos = await Card.find({});

			res.json(todos);
			break;
		case "POST":
			const note = await Card.create({
				name: req.body.name,
			});

			break;

		default:
			break;
	}
};
