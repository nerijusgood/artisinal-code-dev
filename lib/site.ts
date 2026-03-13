export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type PageIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export const siteName = "Artisinal Code";

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/commission", label: "Commission" },
  { href: "/contact", label: "Contact" },
  { href: "/museum", label: "Museum" },
];

export const pageIntros: Record<string, PageIntro> = {
  about: {
    eyebrow: "Institutional Background",
    title: "We preserve human code before it is politely automated out of existence.",
    description:
      "Part boutique engineering atelier, part cultural trust, Artisinal Code advocates for fragile practices such as hand-typed loops, emotionally charged refactors, and debugging by intuition.",
  },
  services: {
    eyebrow: "Craft Services",
    title: "Consulting for clients who still prefer the scent of singed human judgment.",
    description:
      "Our service catalogue treats software development like cabinetmaking: slow, expensive, and suspiciously proud of every visible joint.",
  },
  work: {
    eyebrow: "Selected Works",
    title: "A portfolio of bespoke systems with provenance, temperament, and occasional race conditions.",
    description:
      "Each engagement is documented like a gallery accession: materials, era, and whether the implementation panic happened before or after launch.",
  },
  commission: {
    eyebrow: "Commissions Office",
    title: "Request a handcrafted software object for your institution, brand, or operational drama.",
    description:
      "We accept a limited number of commissions each season, prioritizing patrons who understand that great software requires patience, ritual, and at least one contentious naming discussion.",
  },
  contact: {
    eyebrow: "Visitor Services",
    title: "Write to the curators, conservators, and former senior engineers keeping the lights on.",
    description:
      "General inquiries, acquisition offers, and sightings of authentic human-written code may be submitted through our correspondence desk.",
  },
  museum: {
    eyebrow: "Permanent Collection",
    title: "A living archive of endangered programming gestures.",
    description:
      "The museum catalogues artifacts from the late human era: overfit architectures, ceremonial shell aliases, and commits authored under deadline-induced transcendence.",
  },
};

