import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Consulting from './Component/Consulting/Consulting';
import About from './Component/About/About';
import Features from './Component/Features/Features';
import WhyWorkWithUs from './Component/WhyWorkWithUs/WhyWorkWithUs';
import OurFocusedArea from './Component/OurFocusedArea/OurFocusedArea';

function App() {
  return (
    <div className="App">
     <Header/>
     <Consulting/>
     <About/>
     <Features/>
     <WhyWorkWithUs/>
     <OurFocusedArea/>
    </div>
  );
}

export default App;
