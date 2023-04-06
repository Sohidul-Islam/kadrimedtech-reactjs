import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Consulting from './Component/Consulting/Consulting';
import About from './Component/About/About';
import Features from './Component/Features/Features';
import WhyWorkWithUs from './Component/WhyWorkWithUs/WhyWorkWithUs';
import OurFocusedArea from './Component/OurFocusedArea/OurFocusedArea';
import OurServices from './Component/OurServices/OurServices';
import OtherServices from './Component/OtherServices/OtherServices';
import Footer from './Component/Footer/Footer';
import MarketEntryStrategy from './Component/MarketEntryStrategy/MarketEntryStrategy';
import WorldWideClient from './Component/WorldWideClient/WorldWideClient';

function App() {
  return (
    <div className="App">
     <Header/>
     <Consulting/>
     <About/>
     <Features/>
     <WhyWorkWithUs/>
     <OurFocusedArea/>
     <MarketEntryStrategy/>
     <WorldWideClient/>
     <OurServices/>
     <OtherServices/>
     <Footer/>
    </div>
  );
}

export default App;
