import { Link } from 'react-router-dom'

import ES from 'C:/Users/tiago/OneDrive/Escritorio/Paginas/Pagina 9 (AyrtonReact)/AyrtonReact/src/assets/images/media/bandera-espana.avif'
import { useTranslation } from 'react-i18next';

function ButtonEs() {
    const{i18n} = useTranslation(["global"])
    const changeLanguage = () => {
        i18n.changeLanguage('es')
    };
    return (
        <Link onClick={changeLanguage} className='absolute top-7 right-28 max-[900px]:right-18 max-[768px]:right-3 max-[600px]:right-3 max-[500px]:right-3 max-[499px]:top-6 max-[450px]:right-3 max-[449px]:top-5 '>
            <img src={ES} alt="Bandera España" className="z-50 text-white h-7 mr-2 max-md:h-5 max-[450px]:h-3 max-[499px]:mx-1 " />
        </Link>
    )
}

export default ButtonEs