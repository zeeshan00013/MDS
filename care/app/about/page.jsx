import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              SynthMind AI was founded in 2019 with a radical idea: that
              artificial intelligence should enhance human decision-making
              rather than replace it. Our team of neuroscientists and machine
              learning experts set out to create a new paradigm in AI.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we're recognized as pioneers in cognitive computing, with
              our technology powering some of the world's most innovative
              companies across healthcare, finance, and creative industries.
            </p>
            <p className="text-gray-700">
              Our name reflects our philosophy - we synthesize human-like
              understanding with machine precision to create truly intelligent
              systems.
            </p>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </section>

      <section className="bg-primary-50 rounded-xl p-12 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            "To create symbiotic intelligence systems that amplify human
            potential while maintaining ethical boundaries and transparency."
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
              <div className="text-primary-600 mb-4">
                <i className="fas fa-lightbulb text-3xl"></i>
              </div>
              <h3 className="font-bold text-dark mb-2">
                Augmented Intelligence
              </h3>
              <p className="text-gray-600">
                We build tools that enhance human cognition, not replace it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
              <div className="text-primary-600 mb-4">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="font-bold text-dark mb-2">Ethical Framework</h3>
              <p className="text-gray-600">
                Every system undergoes rigorous ethical review before
                deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
              <div className="text-primary-600 mb-4">
                <i className="fas fa-project-diagram text-3xl"></i>
              </div>
              <h3 className="font-bold text-dark mb-2">Neural Synthesis</h3>
              <p className="text-gray-600">
                Our proprietary architecture mimics human neural pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-dark mb-12 text-center">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="CEO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark mb-1">
                Dr. Elena Vasquez
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                CEO & Co-Founder
              </p>
              <p className="text-gray-600">
                Cognitive computing pioneer with a PhD in Computational
                Neuroscience from Stanford.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="CTO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark mb-1">Raj Patel</h3>
              <p className="text-primary-600 font-medium mb-3">
                Chief Technology Officer
              </p>
              <p className="text-gray-600">
                Former lead architect at DeepMind, specializes in
                neural-symbolic integration.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Chief Ethics Officer"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark mb-1">
                Dr. Kwame Nkosi
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                Chief Ethics Officer
              </p>
              <p className="text-gray-600">
                Author of "The Moral Algorithm" and AI policy advisor to the EU
                Parliament.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white rounded-xl p-12 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-primary-400 mb-2">37+</div>
            <div className="text-gray-300">Peer-Reviewed Papers</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary-400 mb-2">84+</div>
            <div className="text-gray-300">Patents Granted</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary-400 mb-2">22M+</div>
            <div className="text-gray-300">Daily Predictions</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-gray-300">Client Retention</div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Experience the SynthMind Difference
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join forward-thinking organizations leveraging our cognitive AI
          platform.
        </p>
        <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
          Schedule a Demo
        </button>
      </section>
    </main>
  );
};

export default page;
