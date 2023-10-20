import { Navbar } from '@material-tailwind/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Logo from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/media/logo.webp';

export default function Navbars() {
  return (
    <Navbar className="w-full rounded-none border-none bg-black">
      <div className="flex py-2 justify-center">
        <LazyLoadImage
          src={Logo}
          alt="Logo"
          effect="blur"
          className="w-[30%] h-[100%] mx-auto lazy-load-image"
        />
      </div>
      <hr className='mt-1' />
    </Navbar>
  );
}
