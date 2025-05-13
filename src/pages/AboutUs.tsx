
import React from "react";
import Layout from "@/components/layout/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HomeIcon className="h-4 w-4 mr-1" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">About Health Yojana Navigator</h1>
            <p className="text-muted-foreground">
              Your guide to healthcare policies and services in India
            </p>
          </div>
          
          <div className="prose max-w-none">
            <p>
              Health Yojana Navigator is a platform designed to help Indian citizens navigate the complex landscape of healthcare 
              policies, insurance schemes, and medical services. Our mission is to make information about healthcare options 
              accessible to everyone, ensuring that people can make informed decisions about their health coverage and care.
            </p>
            
            <h2>Our Purpose</h2>
            <p>
              We understand that finding the right healthcare coverage can be overwhelming. With numerous government schemes, 
              private insurance options, and specialized health services available, it can be difficult to determine which options are 
              best suited to your needs and eligibility.
            </p>
            <p>
              That's why we've created a comprehensive platform that brings together information about various healthcare policies 
              and services in one place, making it easier for you to explore, compare, and choose the options that are right for you.
            </p>
            
            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Policy Information:</strong> Detailed information about government healthcare schemes and private insurance policies.
              </li>
              <li>
                <strong>Policy Finder Tool:</strong> A personalized tool that helps you identify healthcare policies you may be eligible for based on your specific circumstances.
              </li>
              <li>
                <strong>Specialist Directory:</strong> A searchable database of healthcare specialists across various fields of medicine.
              </li>
              <li>
                <strong>Appointment Booking:</strong> An easy-to-use system for scheduling appointments with healthcare professionals.
              </li>
              <li>
                <strong>Educational Resources:</strong> Articles, guides, and FAQs to help you better understand healthcare options and make informed decisions.
              </li>
            </ul>
            
            <h2>Our Vision</h2>
            <p>
              We envision a future where every Indian citizen has access to the healthcare they need, supported by a clear understanding of their coverage options 
              and easy access to medical services. By providing comprehensive information and user-friendly tools, we aim to contribute to improved health outcomes 
              and financial protection for all.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              Have questions, suggestions, or feedback? We'd love to hear from you! Please feel free to reach out to us at 
              <a href="mailto:info@healthyojana.com"> info@healthyojana.com</a> or call us at <a href="tel:+911800XXXXXXX">1800-XXX-XXXX</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
