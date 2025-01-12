import "../styles/global.css";
// import UserProvider from "../context/user"
import Navbar from "../componentsglobal/navbar";
import Footer from "../componentsglobal/footer";

export default function App({ Component, pageProps }) {
  return (
    // <UserProvider>
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
    // </UserProvider>
  );
}
