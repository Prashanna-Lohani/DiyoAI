import { Collaborations } from "./sections/collaborations";
import { Hero } from "./sections/hero";
import { Milestones } from "./sections/milestones";
import { News } from "./sections/news";
import { Products } from "./sections/products";
import { Testimonials } from "./sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Milestones />
      <Products />
      <Collaborations />
      <News />
      <Testimonials />
    </>
  );
}
