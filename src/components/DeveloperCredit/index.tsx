import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeveloperCredit() {
  return (
    <section className="w-full bg-black text-white py-1">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Texto */}
        <p className="text-sm md:text-base text-center md:text-left">
          Desenvolvido por <span className="font-semibold">Nathan Araújo</span>
        </p>

        {/* Links sociais */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/natharaujos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
          <a
            href="https://instagram.com/nathan_araujos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/nathanaraujos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default DeveloperCredit;
