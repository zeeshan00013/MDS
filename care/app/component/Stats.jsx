"use client";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { FaHandPointRight } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip
);

export default function Stats() {
  const ClaimData = {
    labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
    datasets: [
      {
        label: "Clean Claims",
        data: [30, 45, 60, 80, 99],
        backgroundColor: "#4ccf18",
      },
    ],
  };

  const barData = {
    labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
    datasets: [
      {
        label: "Submission Success",
        data: [30, 45, 60, 80, 97.35],
        backgroundColor: "#FBBF24",
      },
    ],
  };

  const lineData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue Boost",
        data: [5, 10, 20, 30],
        borderColor: "#34D399",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#362d7e]">
          Partner With The Billing Experts Trusted Nationwide <br />
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {/* Box 1 */}
          <div className="bg-[#21204A] rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold">Nearly 99%</h3>
            <p className="mt-2">Clean claims success rate</p>
            <Bar
              data={ClaimData}
              options={{
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>

          {/* Box 2 */}
          <div className="bg-[#21204A] rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold">Approx. 97.35%</h3>
            <p className="mb-4">First-attempt approval rate</p>
            <Bar
              data={barData}
              options={{
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>

          {/* Box 3 */}
          <div className="bg-[#21204A] rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold">Up to 30%</h3>
            <p className="mb-4">Average Revenue Growth</p>
            <Line
              data={lineData}
              options={{
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-[#21204A]">
              A{" "}
              <span className="text-[#362d7e]">
                Revenue-Focused RCM Company
              </span>{" "}
              Empowering Healthcare Providers
            </h3>
            <p className="mt-4  text-lg">
              We are a US-based revenue cycle management partner helping clinics
              and medical groups streamline their billing, minimize denials, and
              maximize collections — all through smart, tech-enabled workflows.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6  text-gray-800">
              <div>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> Eligibility
                  Verification
                </p>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> Clean Claims
                  Audit
                </p>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> Timely
                  Submissions
                </p>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> End-to-End RCM
                </p>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> AR Clean-Up
                </p>
                <p className="mb-2 flex items-center gap-1">
                  <FaHandPointRight className="text-[#362d7e]" /> Speedy
                  Reimbursements
                </p>
              </div>
            </div>
          </div>

          {/* Happiness & Experts */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <p className="text-blue-500 font-semibold">Client Satisfaction</p>
              <h4 className="text-6xl font-bold text-[#050505] my-2">96%</h4>
              <p className="text-black mt-4">
                Rated 4.8 out of 5 by over 350 providers nationwide.
              </p>
              <a href="#" className="text-blue-500 mt-2 inline-block">
                Read reviews →
              </a>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <p className="text-purple-600 font-semibold">Certified Team</p>
              <h4 className="text-6xl font-bold text-[#050505] my-2">1.2k+</h4>
              <p className="text-black mt-4">
                Professionals with CMRS, RHIA, and CPB credentials across all
                specialties.
              </p>
              <a href="#" className="text-purple-600 mt-2 inline-block">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
