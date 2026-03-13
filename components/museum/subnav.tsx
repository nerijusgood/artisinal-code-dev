import Link from "next/link";

const links = [
  { href: "/museum", label: "Overview" },
  { href: "/museum/exhibits", label: "Exhibits" },
  { href: "/museum/commit-history", label: "Commit History" },
  { href: "/museum/archive", label: "Archive" },
  { href: "/museum/endangered-practices", label: "Endangered Practices" },
];

export function MuseumSubnav() {
  return (
    <div className="border-y border-border bg-background/65 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-3 px-6 py-4 sm:px-8 lg:px-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

