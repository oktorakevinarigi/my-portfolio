import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Header } from "@/layouts/header";
import { SimpleBlock } from "@/layouts/simple-block";

export default function Home() {
  return (
    <>
      <Header />
      <SimpleBlock>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </SimpleBlock>
    </>
  );
}
