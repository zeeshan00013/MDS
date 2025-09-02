import Image from "next/image";
import doctorImage from "../Images/drhero.png"; // Replace with your image
import { FaStar, FaUserMd } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-10 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-center  gap-10 ">
        {/* Left Content */}
        <div className="lg:w-1/2 mt-10">
          <p className="uppercase text-lg font-semibold text-zinc-900 mb-2">
            Care Bridge MDs
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#3d2d7d] leading-tight mb-4">
            Top Medical Billing Company in Texas | Care Bridge MDs
          </h1>
          <p className="text-zinc-900 mb-2">
            CareBridge is one of the leading medical billing firms in the USA –
            committed to delivering best-in-class billing and coding services
            for physicians and healthcare providers seeking reliable third-party
            billing solutions.
          </p>
          <p className="text-zinc-900 mb-6">
            Our certified medical coders and billers empower healthcare
            organizations to recover aged receivables and efficiently resolve
            insurance claim denials.
          </p>

          {/* Form */}
          <div className="flex flex-wrap gap-3 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border rounded w-[150px] md:w-[180px] outline-0 border-[#362d7e]"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded w-[150px] md:w-[180px] outline-0 border-[#362d7e]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2 border rounded w-[150px] md:w-[180px] outline-0 border-[#362d7e]"
            />
            <textarea
              type="text"
              placeholder="Text"
              className="px-4 py-2 border rounded w-[150px] md:w-[180px] outline-0 border-[#362d7e]"
            />
          </div>

          {/* CTA + Google Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
            <button className="bg-[#362d7e] text-white px-5 py-2 rounded-lg hover:bg-[#2e3b8f] transition-all cursor-pointer shadow-md">
              Book An Appointment
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <div className="relative z-10">
            <Image
              src={doctorImage}
              alt="Doctor"
              className="w-full h-[35rem] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#362d7e] text-white  py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm md:text-base">
          <div className="flex flex-col items-center gap-1">
            <FaStar className="text-2xl" />
            <span>100+ Satisfied Providers</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MdLocalHospital className="text-2xl" />
            <span>Serving More Than 50 Specialties</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaUserMd className="text-2xl" />
            <span>100+ Billing and Coding Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
