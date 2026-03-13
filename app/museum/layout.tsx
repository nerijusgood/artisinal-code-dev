import type { ReactNode } from "react";
import { MuseumSubnav } from "@/components/museum/subnav";

export default function MuseumLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MuseumSubnav />
      {children}
    </>
  );
}

