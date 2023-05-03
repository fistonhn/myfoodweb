import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from "@/store";

const inter = Inter({ subsets: ["latin"] });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </SessionProvider>
  );
}
