import type { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "src/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Home>
				<Component {...pageProps} />
			</Home>
		</ChakraProvider>
	);
}
export default MyApp;
