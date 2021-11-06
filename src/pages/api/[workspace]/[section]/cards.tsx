import clientPromise from "src/lib/mongo/connect";

export default async (req, res) => {
	const client = await clientPromise;
	const db = client.db("project-manager");

	if (req.method === "GET") {
		const movies = await db.collection("cards").find({}).sort({ metacritic: -1 }).limit(20).toArray();

		res.json(movies);
	} else if (req.method === "POST") {
		const movies = await db.collection("cards").insert({ name: "Hey" });

		res.json(movies);
	}
};
