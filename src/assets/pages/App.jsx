import 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/App.css';


import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Encabezado from "../components/Tituloprops"
import Pilotos from "../components/Pilotos"
import Icon from "../components/Icon"
import Footer from "../components/Footer"
import Partners from "../components/Partners"
import Sublevel from "../components/Sublevel"
import Brands from "../components/Brands"
import ButtonEn from "../components/ButtonEn"
import AboutUs from '../components/AboutUs';
import HeaderSection from '../components/HeaderSection';


function App() {
  
  return (
    <div className='bg-black'>
      <Navbar />
      <ButtonEn />
      <Sidebar />
      <HeaderSection />
      <Encabezado titulo='¿Qué hacemos?'/>
      <AboutUs />
      <Encabezado titulo='Pilotos'/>
      <Pilotos />
      <Icon />
      <Footer />
      <Partners />
      <Brands />
      <Sublevel />
    </div>
  );
}

export default App;
