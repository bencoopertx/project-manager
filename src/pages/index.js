import Head from "next/head";
import React from "react";
import Layout from "src/components/layout";
const Home = ({ isConnected, sections }) => {
	console.log("sections", sections);
	return (
		<div className="container">
			<Head>
				<title>Project Manager - Ben Cooper</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout />
		</div>
	);
};

Home.getInitialProps = async () => {
	const res = await fetch("http://localhost:3000/api/workspaces/1/sections");
	const { data } = await res.json();

	return { sections: data };
};

export default Home;
