import { Link } from 'react-router-dom'

import ES from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/media/bandera-espana.avif'

function ButtonEs() {
    return (
        <Link to="/" className='absolute top-7 right-10 max-[900px]:right-10 max-[768px]:right-3 max-[600px]:right-3 max-[500px]:right-3 max-[499px]:top-6 max-[450px]:right-3 max-[449px]:top-5 '>
            <img src={ES} alt="Bandera España" className="z-50 text-white h-7 mr-2 max-md:h-5 max-[400px]:h-4 max-[499px]:mx-1 " />
        </Link>
    )
}

export default ButtonEs