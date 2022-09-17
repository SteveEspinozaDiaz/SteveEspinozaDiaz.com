import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/UI/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      {/* <div className="global__content-container"> */}
      <Component {...pageProps} />
      {/* </div> */}
    </div>
  );
}

export default MyApp;
