"use client";
import Image from "next/image";
import { FaMoneyBillWave, FaHospital } from "react-icons/fa";
import hand from "../Images/hand.webp";

export default function BillingSection() {
  return (
    <section className=" mb-10  px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-medium  text-center text-[#362d7e] mb-4">
          RCM Medical Billing Company
        </h2>
        <p className="text-gray-900 max-w-3xl mx-auto mb-12">
          A dependable and results-driven partner offering top-tier revenue
          cycle management services to enhance profitability for medical
          practices.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaMoneyBillWave size={50} className="text-[#362d7e] mb-4" />
            <h3 className="text-lg font-bold text-[#362d7e] mb-2">
              Enhance Your Profitability
            </h3>
            <p className="text-gray-600 mb-6">
              With years of experience in the healthcare industry, we know
              exactly how to maximize your revenue and streamline your
              practice’s operations.
            </p>
            <button className="bg-[#362d7e] text-white px-6 py-2 rounded-md font-medium cursor-pointer hover:bg-[#352d74] transition">
              Read more
            </button>
          </div>

          {/* Center Image */}
          <div className="hidden md:block">
            <Image
              src={hand} // replace with your image path
              alt="Doctor handshake"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaHospital size={50} className="text-[#362d7e] mb-4" />
            <h3 className="text-lg font-bold text-[#362d7e] mb-2">
              Full-Service Medical Billing
            </h3>
            <p className="text-gray-600 mb-6">
              As a full-service medical billing company, we provide complete
              healthcare management services from start to finish.
            </p>
            <button className="bg-[#362d7e] text-white px-6 py-2 rounded-md  font-medium cursor-pointer hover:bg-[#352d74] transition">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
