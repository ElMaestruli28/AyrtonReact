
import NavbarAl from "../componentsAlfano/NavbarAl"
import SidebarAl from "../componentsAlfano/SidebarAl"
import FooterAl from "../componentsAlfano/FooterAl"

import Foro from '../componentsAlfano/Foro';
import IgAl from "../componentsAlfano/IgAl";


function Alfano () {
  
  return (
      <div className='bg-black h-full w-full'>
      <NavbarAl/>
      <IgAl />
      <SidebarAl/>
      <h1 className='text-white text-4xl py-5 mr-auto ml-36 max-sm:ml-16'>Preguntas y Respuestas</h1>
      <hr className=' w-10/12 mx-auto' />
      <Foro />
      <FooterAl />
    </div>
  );
}

export default Alfano;
