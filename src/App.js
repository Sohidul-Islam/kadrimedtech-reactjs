import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Features from './Component/Features/Features';
import WhyWorkWithUs from './Component/WhyWorkWithUs/WhyWorkWithUs';
import OurFocusedArea from './Component/OurFocusedArea/OurFocusedArea';
import OurServices from './Component/OurServices/OurServices';
import OtherServices from './Component/OtherServices/OtherServices';
import Footer from './Component/Footer/Footer';
import MarketEntryStrategy from './Component/MarketEntryStrategy/MarketEntryStrategy';
import WorldWideClient from './Component/WorldWideClient/WorldWideClient';
import "animate.css/animate.min.css";
import Consulting from './Component/Consulting/Consulting';
import Details from './Component/Details/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Consulting />
      <About />
      <Features />
      <WhyWorkWithUs />
      <OurFocusedArea />
      <MarketEntryStrategy />
      <WorldWideClient />
      <OurServices />
      <OtherServices />
      <Footer />
    </div>
  );
}

export default App;
