import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';


import Catania from "../images/racer/Catania.webp"
import Ariel from "../images/racer/Ariel.webp"
import Bruno from "../images/racer/Bruno.webp"
import Carcano from "../images/racer/Carcano.webp"
import Cordone from "../images/racer/Cordone.webp"
import Dante from "../images/racer/Dante.webp"
import Diego from "../images/racer/Diego.webp"
import Dore from "../images/racer/Dore.webp"
import Giraudo from "../images/racer/Giraudo.webp"
import Maschio from "../images/racer/Maschio.webp"
import Ramos from "../images/racer/Ramos.webp"
import Rossotti from "../images/racer/Rossotti.webp"
import Storni from "../images/racer/Storni.webp"

import { useTranslation } from 'react-i18next';

export default function Pilotos() {
  const datos = [
    { name: 'Agustin Catania', categoria: 'Expert', link: 'https://www.instagram.com/agustinncatania/', img:Catania},
    { name: 'Ariel Stratievsky', categoria: 'Expert', link: 'https://www.instagram.com/arielstrat/',img:Ariel },
    { name: 'Bruno Medeot', categoria: 'Senior', link: 'https://www.instagram.com/bruno_medeot/',img:Bruno },
    { name: 'Dante Larocca', categoria: 'Junior', link: 'https://www.instagram.com/dantelarok/',img:Dante },
    { name: 'Diego Alvaro', categoria: 'Senior', link: 'https://www.instagram.com/dieguitoalvaro/',img:Diego },
    { name: 'Joaco Rossotti', categoria: 'Junior', link: 'https://www.instagram.com/joacocamporino/',img:Rossotti },
    { name: 'José Maria Giraudo', categoria: 'Expert', link: '',img:Giraudo },
    { name: 'Julian Ramos', categoria: 'Senior', link: 'https://www.instagram.com/julianramos.e/',img:Ramos },
    { name: 'Mateo Storni', categoria: 'Cadete', link: '', img:Storni },
    // { name: 'Pablo Moretta', categoria: 'Expert', link: 'https://www.instagram.com/pablomoretta/',img:'' },
    { name: 'Ramiro Carcano', categoria: 'Senior', link: 'https://www.instagram.com/rami_carca/',img:Carcano },
    { name: 'Santino Dore', categoria: 'Junior', link: 'https://www.instagram.com/santino_doreok/',img:Dore },
    { name: 'Tomás Cordone', categoria: 'Junior', link: 'https://www.instagram.com/tomas.co_tc/',img:Cordone },
    { name: 'Valen Maschio', categoria: 'Junior', link: 'https://www.instagram.com/valenmaschio__/',img:Maschio },
  ]


  const [t] = useTranslation("global")

  return (
    <div>
      <section className="bg-black">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">{t("drivers.title")}</h2>
      </div> 
      <div className='grid grid-cols-3 gap-x-8 gap-y-6'>
      {datos.map((dato) => (
        <div key={dato.name}>
          <div className="text-center text-white">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={dato.img} alt={dato.name} />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                  <a href="#">{dato.name}</a>
              </h3>
              <p>{dato.categoria}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href={dato.link} className="text-[#f14b8a] dark:hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='#df1163' height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a> 
                  </li> 
              </ul>
          </div>
      </div>
      ))}
      </div>
    </div>
    </section>
  </div>
  );
}

