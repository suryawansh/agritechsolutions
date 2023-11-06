import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeImg from "./components/HomePageImg/HomeImg";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeImg />
      <Features />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
