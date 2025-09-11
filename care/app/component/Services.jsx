"use client";
import {
  FaStethoscope,
  FaUserMd,
  FaLaptopMedical,
  FaBullhorn,
} from "react-icons/fa";
import Image from "next/image";
import image from "../Images/service dr.webp";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const services = [
  {
    title: "Medical Billing and Coding",
    description:
      "Comprehensive billing & coding services that ensure timely reimbursements and clean claims.",
    icon: <FaStethoscope size={40} />,
    img: image,
  },
  {
    title: "Medical Credentialing",
    description:
      "End-to-end provider enrollment and credentialing with payers for faster onboarding.",
    icon: <FaUserMd size={40} />,
    img: image,
  },
  {
    title: "Virtual Assistance",
    description:
      "Reliable virtual medical assistants to handle scheduling, calls, and patient support.",
    icon: <FaLaptopMedical size={40} />,
    img: image,
  },
  {
    title: "Digital Marketing",
    description:
      "Custom healthcare marketing strategies to boost online visibility and patient engagement.",
    icon: <FaBullhorn size={40} />,
    img: image,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-6 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-medium mb-5 text-center text-[#362d7e]">
          Top Medical Billing Services by Revenue Align Solutions
        </h2>
        <p className="text-zinc-900 mb-2 text-center max-w-3xl">
          RevenueAlignSolutions is one of the leading medical billing firms in
          the USA – committed to delivering best-in-class billing and coding
          services for physicians and healthcare providers seeking reliable
          third-party billing solutions.
        </p>

        <div className="hidden md:flex flex-col md:flex-row gap-4 justify-center transition-all duration-300 mt-5">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative group rounded-xl shadow-lg 
                  flex flex-col md:flex-row justify-start items-start cursor-pointer 
                  overflow-hidden transition-all duration-500 ease-in-out 
                  ${
                    isActive
                      ? "basis-[40%] bg-[#362d7e] text-white"
                      : "basis-[15%] bg-white"
                  } 
                  h-[360px]  hover:bg-[#362d7e]`}
              >
                <div className="w-3/4">
                  <div className="p-4 flex flex-col justify-center gap-2">
                    <span
                      className={`${
                        isActive ? "text-white" : "text-[#362d7e]"
                      }`}
                    >
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-semibold group-hover:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`transition-opacity duration-300 ease-in-out px-4 pb-4 ${
                      isActive ? "opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    <p className="text-lg group-hover:text-white mb-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 transform flex items-end justify-end ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "translate-x-40 opacity-0"
                  }`}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="rounded-md w-[35rem] h-[30rem] object-cover"
                  />
                </div>

                <div className="absolute bottom-6 left-6 h-8 w-8 border flex items-center justify-center rounded-full">
                  <IoIosArrowForward />
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------------- Mobile Layout ---------------------- */}
        <div className="flex flex-col md:hidden mt-8 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start gap-4"
            >
              <div className="text-[#362d7e]">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <button className="bg-[#362d7e] rounded-2xl px-2 py-1 text-white">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
