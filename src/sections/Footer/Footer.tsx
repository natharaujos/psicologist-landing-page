import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CRP from "../../shared/constants/CRP";
import { LINK } from "../../shared/constants/Links";

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-gradient-to-r from-bordo to-bordo/90 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nome e CRP */}
        <div className="text-creme text-sm sm:text-base text-center md:text-left">
          <span className="font-semibold tracking-wide">
            Rafaela Marra | CRP {CRP}
          </span>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center md:justify-end gap-6">
          <a
            href={LINK.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-creme text-2xl sm:text-3xl hover:text-green-400"
            />
          </a>
          <a
            href={LINK.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-creme text-2xl sm:text-3xl hover:text-blue-400"
            />
          </a>
          <a
            href={LINK.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-creme text-2xl sm:text-3xl hover:text-pink-400"
            />
          </a>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="text-center text-creme/70 text-xs sm:text-sm py-3 border-t border-white/10">
        © {new Date().getFullYear()} Rafaela Marra. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
