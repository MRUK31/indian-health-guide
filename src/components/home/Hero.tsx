
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Health Yojana Navigator</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your comprehensive guide to healthcare policies, services, and specialists. 
            Find the right healthcare coverage and medical services based on your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/policy-finder">
              <Button size="lg">Find Suitable Policy</Button>
            </Link>
            <Link to="/appointments">
              <Button variant="outline" size="lg">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
