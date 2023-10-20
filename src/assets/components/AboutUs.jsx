import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";

  import Foto from "../images/backgroundImages/2.webp"

export default function AboutUs() {
    const links = [
        { name: 'Adquisición de Datos', subtitle: 'Desarrollo y Puesta a Punto de Vehiculos de Competición' },
        { name: 'Coaching para pilotos y equipos', subtitle: 'Mejora del Rendimiento y Análisis de Videos On Board' },
        { name: 'Servicios de Telemetría', subtitle: 'Medición y Modificación en Tiempo Real' },
      ]
      const stats = [
        { name: 'PILOTOS', value: '15+' },
        { name: 'VICTORIAS', value: '20+' },
        { name: 'EQUIPOS', value: '5+' },
        { name: 'LOCALIDAD', value: 'BUENOS AIRES' },
      ]
    
    return (
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={Foto}
          alt="AM Engineering Sobre Nosotros"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Nosotros</h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Te podemos llevar a otro nivel con nuestros servicios 100% personalizados para el Karting. <br /> #TakingYouToTheFirstPlace
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Popover
                key={link.name} 
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}>
                    <PopoverHandler>
                        <Button className="bg-am text-black">{link.name}</Button>
                    </PopoverHandler>
                    <PopoverContent className="text-gray-perfect">
                        {link.subtitle}
                    </PopoverContent>
                </Popover>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }