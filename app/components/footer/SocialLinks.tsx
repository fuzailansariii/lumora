import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaFacebookF className="h-6 w-6 text-blue-600" />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaInstagram className="h-6 w-6" style={{ background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} />,
    href: "#",
    label: "Instagram",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-neutral-900 transition hover:opacity-80"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
