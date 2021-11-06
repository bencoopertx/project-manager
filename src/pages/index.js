import Head from "next/head";
import React from "react";
import Layout from "src/components/layout";
function Home({ isConnected }) {
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

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default Home;
