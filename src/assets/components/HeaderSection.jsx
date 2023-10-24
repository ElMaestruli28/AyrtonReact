import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

function HeaderSection() {
  const [t] = useTranslation("global")

  return (
<div className="md:h-screen h-full flex items-center justify-center md:justify-start bg-black">
  <div className="text-white font-oswald font-bold uppercase text-4xl md:ml-10 my-10 md:text-8xl">
    <h1 className="md:text-left text-center">{t("header.title1")}</h1>
    <h1 className="md:text-left text-center">{t("header.title2")}</h1>
    <h1 className="md:text-left text-center">{t("header.title3")}</h1>
  </div>
  <div className='flex flex-col ml-auto mr-32'>
  <a href="https://wa.me/541149730446" className="relative flex p-0.5 text-md text-white rounded-lg group bg-am mx-auto">
  <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0 font-oswald uppercase font-semibold">
  {t("header.button1")}
  </span>
</a>
<Link to="/soporte" className="relative mt-5 flex p-0.5 text-md text-white rounded-lg group bg-am mx-auto">
  <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0 font-oswald uppercase font-semibold">
  {t("header.button2")}
  </span>
</Link>
  </div>
</div>

  );
}

export default HeaderSection;
