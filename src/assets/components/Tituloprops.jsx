import 'tailwindcss/tailwind.css';

function Encabezado(props) {
  const { titulo } = props;

  return (
    <div className="h-full w-full flex bg-am">
      <h1 className=" text-gray-perfect font-oswald font-bold uppercase text-2xl my-auto mx-auto p-20 md:text-7xl max-sm:top-1/4">
        {titulo}
      </h1>
    </div>
  );
}

export default Encabezado;
