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
