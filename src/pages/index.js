import Head from "next/head";
import Layout from "src/components/layout";
import clientPromise from "src/lib/mongo/connect";
export default function Home({ isConnected }) {
	console.log("is connected", isConnected);
	return (
		<div className="container">
			<Head>
				<title>Project Manager - Ben Cooper</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout />
		</div>
	);
}

export async function getServerSideProps(context) {
	const client = await clientPromise;

	// client.db() will be the default database passed in the MONGODB_URI
	// You can change the database by calling the client.db() function and specifying a database like:
	// const db = client.db("myDatabase");
	// Then you can execute queries against your database like so:
	// db.find({}) or any of the MongoDB Node Driver commands

	const isConnected = await client.isConnected();

	return {
		props: { isConnected },
	};
}
