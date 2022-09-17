import './styles/App.css';
import Hero from './Hero'
import Biography from './Biography'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import Contact from './Contact'
import Footer from './Footer'

import FourHandsImage from './images/FourHandsImage.jpg'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Biography/>
      <div className="divider-image-container">
        <img className="divider-image" src={FourHandsImage} alt="four-hands"/>
      </div>
      <Gallery/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
