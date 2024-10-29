import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Header } from "@/layouts/header";
import { SimpleBlock } from "@/layouts/simple-block";

export default function Home() {
  return (
    <>
      <Header />
      <SimpleBlock>
        <Hero />
        <About />
      </SimpleBlock>
    </>
  );
}
