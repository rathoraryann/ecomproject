import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeaturedSectionFruit from "./components/FeaturedSectionFruit";
import FeaturedSectionBreakfast from "./components/FeaturedSectionBreakfast";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const App = () =>{

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeaturedSectionFruit />
      <FeaturedSectionBreakfast/>
      <Banner/>
      <Blog/>
      <Newsletter/>
      <FeatureSection/>
      <Footer/>
    </main>
  )
}

export default App;