import "slick-carousel/slick/slick.css";
import "../styles/index.scss";


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
