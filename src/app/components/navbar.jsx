import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex justify-center max-container padding-container relative z-30 py-5">
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-emerald-500 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
