import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rights } from "@/components/Rights";
import { Process } from "@/components/Process";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Precedent } from "@/components/Precedent";
import { Resources } from "@/components/Resources";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rights />
        <Process />
        <EmailTemplate />
        <Precedent />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
