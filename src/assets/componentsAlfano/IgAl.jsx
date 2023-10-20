import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

function IgAl() {
  return (
    <div>
        <a
          href="https://www.instagram.com/alfano_argentina/"
          target="_blank"
          rel="noopener noreferrer"
          className='absolute top-1 right-7 max-[600px]:left-20 max-[400px]:left-14 max-[599px]:mt-3 max-[400px]:mt-2 mt-6 mr-7'
          >
          <FontAwesomeIcon icon={faInstagram} className='rounded-full text-white border-2 p-1 border-white w-6 h-6 hover:border-alfano hover:text-alfano ease-in-out duration-300'/>
        </a>
            </div>
  )
}

export default IgAl