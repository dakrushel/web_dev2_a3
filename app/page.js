"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="bg-blue-900 min-h-screen text-white">
      
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-md mb-6">
          Welcome to IMR
        </h1>
        <p className="text-xl font-semibold max-w-3xl">
          Relive the glory days of movies! Explore our extensive inventory
          database of timeless classics and new favorites. Login to access
          your personalized collection.
        </p>
        <div className="mt-8">
          <Link
            href="/login"
            className="bg-yellow-400 text-blue-900 px-6 py-3 text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            Login Now
          </Link>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-16 bg-yellow-400 text-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-8">
            Throwba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            
            {/* Movie Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/GWH.jpg"
                alt="Good Will Hunting"
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Good Will Hunting</h3>
                <p className="text-sm">Robin Williams, Matt Damon, 1997</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/B2TF.jpg"
                alt="Back to the Future"
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Back to the Future</h3>
                <p className="text-sm">Michael J. Fox, Christopher Lloyd, 1985</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/PF.jpg"
                alt="Pulp Fiction"
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Pulp Fiction</h3>
                <p className="text-sm">John Travolta, Uma Thurman, 1994</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;