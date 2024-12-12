import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Material from "../components/Material/Material";
import Products from "../components/Products/Products";
import Service from "../components/Service/Service";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
      <About></About>
      <Material></Material>
      <Products></Products>
    </div>
  );
}
