import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Specialties from "./component/Specialties";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Specialties />
    </div>
  );
}
