import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Material from "../components/Material/Material";
import Products from "../components/Products/Products";
import Service from "../components/Service/Service";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header setModal={setModal}></Header>
      {modal && <Modal setModal={setModal} />}
      <Hero></Hero>
      <Service></Service>
      <About></About>
      <Material></Material>
      <Products></Products>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}
