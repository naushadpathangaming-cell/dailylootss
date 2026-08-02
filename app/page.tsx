import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <WhyChoose />
    </>
  );
}