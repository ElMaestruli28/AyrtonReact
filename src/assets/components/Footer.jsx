import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
 
export default function Footer() {
  const [t] = useTranslation("global")

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white py-6 px-6 text-center md:justify-between">
      <Typography className="font-normal uppercase">
        &copy; 2023 amastrangelo.engineering
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://wa.me/541149730446"
            className="font-normal transition-colors"
          >
            Whatsapp
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.instagram.com/amastrangelo.engineering/"
            className="font-normal transition-colors"
          >
            Instagram
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://ar.linkedin.com/in/ayrton-mastrángelo-616469162"
            className="font-normal transition-colors"
          >
            Linkedin
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://wa.me/541149730446"
            className="font-normal transition-colors"
          >
            {t("footer.contact")}
          </Typography>
        </li>
      </ul>
    </footer>
  );
}