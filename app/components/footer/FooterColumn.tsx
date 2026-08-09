interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-semibold uppercase text-sm tracking-wide text-neutral-900">
        {title}
      </h4>

      <ul className="mt-5 space-y-3 text-sm text-neutral-600">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition hover:text-neutral-900"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
