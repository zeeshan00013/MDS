"use client";
import { useState } from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaWalking,
  FaUserMd,
  FaLungs,
  FaStethoscope,
  FaSyringe,
  FaPills,
  FaUserInjured,
  FaDisease,
} from "react-icons/fa";

const specialties = [
  { name: "OB/GYN", icon: <FaUserMd size={40} /> },
  { name: "Neurology", icon: <FaBrain size={40} /> },
  { name: "Orthopedics", icon: <FaBone size={40} /> },
  { name: "Podiatry", icon: <FaWalking size={40} /> },
  { name: "Cardiology", icon: <FaHeartbeat size={40} /> },
  { name: "Nephrology", icon: <FaLungs size={40} /> },
  { name: "Psychiatry", icon: <FaBrain size={40} /> },
  { name: "Primary Care", icon: <FaStethoscope size={40} /> },
  { name: "Endocrinology", icon: <FaSyringe size={40} /> },
  { name: "Internal Medicine", icon: <FaPills size={40} /> },
  { name: "Pain Management", icon: <FaUserInjured size={40} /> },
  { name: "Infectious Disease", icon: <FaDisease size={40} /> },
];

export default function Specialties() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-medium  text-center  mb-4 text-zinc-900">
        Medical Specialties Covered by
        <span className="text-[#362d7e]">
          {" "}
          RevenueAlignSolutions{" "}
        </span> <br /> with Expert Billing Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        (RAS) delivers comprehensive medical billing services for a broad
        spectrum of specialties, ranging from primary care to surgical centers,
        with a focus on small and mid-sized practices.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-12 ">
        {specialties.map((item, idx) => (
          <div
            key={idx}
            className="flex  gap-2 items-center space-y-2 hover:text-purple-700 transition"
          >
            <div className="text-gray-600">{item.icon}</div>
            <p className="font-medium text-[#362d7e]">{item.name}</p>
          </div>
        ))}
      </div>

      <button className="bg-[#362d7e] hover:bg-[#3d328e] cursor-pointer text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
        View More
      </button>
    </section>
  );
}
