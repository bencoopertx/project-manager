import Head from "next/head";
import Layout from "src/components/layout";
export default function Home() {
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
