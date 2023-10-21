import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

export default function Pilotos() {
  const datos = [
    { name: 'Adquisición de Datos', categoria: 'Desarrollo y Puesta a Punto de Vehiculos de Competición', link: '' },
    { name: 'Coaching para pilotos y equipos', categoria: 'Mejora del Rendimiento y Análisis de Videos On Board', link: '' },
    { name: 'Servicios de Telemetría', categoria: 'Medición y Modificación en Tiempo Real', link: '' },
    { name: 'Adquisición de Datos', categoria: 'Desarrollo y Puesta a Punto de Vehiculos de Competición', link: '' },
    { name: 'Coaching para pilotos y equipos', categoria: 'Mejora del Rendimiento y Análisis de Videos On Board', link: '' },
    { name: 'Servicios de Telemetría', categoria: 'Medición y Modificación en Tiempo Real', link: '' },
  ]
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestros Pilotos</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Un poco de los corredores que con nuestro servicio los ayudamos a llegar a un siguiente nivel</p>
      </div> 
      <div className='grid grid-cols-3 gap-x-8 gap-y-6'>
      {datos.map((dato) => (
        <div key={dato.name}>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{dato.name}</a>
              </h3>
              <p>{dato.categoria}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href={dato.link} className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>                      </a> 
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

