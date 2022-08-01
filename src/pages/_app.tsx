import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { InternationalizationProvider } from "@/context/InternationalizationContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <InternationalizationProvider>
        <Component {...pageProps} />
      </InternationalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
