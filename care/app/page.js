import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Specialties from "./component/Specialties";
import BillingSection from "./component/Revenew";
import Testimonial from "./component/Testimonial";
import Faq from "./component/Faq";
import Stats from "./component/Stats";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Specialties />
      <BillingSection />
      <Stats />
      <Testimonial />
      <Faq />
    </div>
  );
}
