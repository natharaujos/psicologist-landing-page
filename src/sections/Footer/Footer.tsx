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
    <div
      id="footer"
      className="xs:h-[150px] xl:h-[75px] w-full bg-bordo flex items-center justify-center"
    >
      <div className="h-full flex flex-wrap items-center justify-center px-8 md:px-48 lg:w-full">
        <div className="xs:w-full lg:w-full xl:w-1/2 flex flex-col justify-center items-center gap-1 text-creme">
          <p className="xs:text-[1em] md:text-[1.35em] lg:text-[1.5em]">
            Rafaela Marra | CRP {CRP}
          </p>
        </div>
        <div className="xs:w-full xl:w-1/2">
          <div className="flex justify-center gap-10">
            <a href={LINK.whatsapp} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white xs:text-[50px] lg:text-[50px]"
              />
            </a>
            <a href={LINK.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white xs:text-[50px] lg:text-[50px]"
              />
            </a>
            <a href={LINK.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white xs:text-[50px] lg:text-[50px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
