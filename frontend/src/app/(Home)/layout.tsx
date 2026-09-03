import type { ReactNode } from "react";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
