import type { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import clientPromise from "src/lib/mongo/connect";
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
