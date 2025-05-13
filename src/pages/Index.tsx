
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import SearchWindow from "@/components/home/SearchWindow";
import PolicySection from "@/components/home/PolicySection";
import ServicesSection from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <SearchWindow />
          </div>
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h2 className="text-xl font-semibold mb-4">Find Healthcare According to Your Needs</h2>
              <p className="mb-4">
                Our platform helps you navigate through various healthcare options available through government and private policies.
              </p>
              <p className="mb-4">
                Whether you're looking for specialist doctors, insurance coverage, or information about government healthcare schemes,
                we're here to guide you every step of the way.
              </p>
              <p>
                Use our Policy Finder tool to discover healthcare policies that match your eligibility criteria
                and our appointment booking system to connect with specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <PolicySection />
      <ServicesSection />
    </Layout>
  );
};

export default Index;
