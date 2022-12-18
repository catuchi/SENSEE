import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { GlobalStateContext } from "../context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <GlobalStateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </GlobalStateContext>
  );
}
