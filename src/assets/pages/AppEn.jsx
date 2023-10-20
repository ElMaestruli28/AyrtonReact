import 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/App.css';

import Navbar from "../components/Navbar"
import SidebarEn from "../componentsEn/SidebarEn"
import HeaderSection from "../components/HeaderSection"
import Encabezado from "../components/Tituloprops"
import Pilotos from "../components/Pilotos"
import Icon from "../components/Icon"
import FooterEn from "../componentsEn/FooterEn"
import PartnersEn from "../componentsEn/PartnersEn"
import Sublevel from "../components/Sublevel"
import Brands from "../components/Brands"
import ButtonEs from "../componentsEn/ButtonEs"
import AboutUs from '../components/AboutUs';

function App() {
  
  return (
    <div className='bg-black'>
      <Navbar />
      <ButtonEs />
      <SidebarEn />
      <HeaderSection />
      <Encabezado titulo=' About us' />
      <AboutUs />
      <Encabezado titulo='Racers' />
      <Pilotos />
      <Icon />
      <FooterEn />
      <PartnersEn />
      <Brands />
      <Sublevel />
    </div>
  );
}

export default App;
