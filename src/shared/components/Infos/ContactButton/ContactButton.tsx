import React from "react";
import { LINK } from "../../../constants/Links";

interface ContactButtonProps {
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
}

function ContactButton({
  reverse = false,
  children,
  className = "",
}: ContactButtonProps) {
  const base =
    "w-[300px] h-[50px] rounded-full border-4 font-bold text-base font-quicksand transition-all duration-300 flex items-center justify-center text-center";

  const reverseClasses = reverse
    ? "bg-bordo text-white border-bordo hover:bg-white hover:text-bordo"
    : "bg-white text-bordo border-bordo hover:bg-bordo hover:text-white";

  return (
    <a
      href={LINK.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${reverseClasses} ${className}`}
    >
      {children}
    </a>
  );
}

export default ContactButton;
