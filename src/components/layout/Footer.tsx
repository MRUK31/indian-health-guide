
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center text-xl font-bold mb-4">
              <div className="text-primary mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5" />
                  <path d="M12 19V5" />
                  <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
                </svg>
              </div>
              <span>HNY</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Health Yojana Navigator
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/doctors" className="hover:underline">Our Doctors</Link></li>
              <li><Link to="/services" className="hover:underline">All Our Services</Link></li>
              <li><Link to="/emergency" className="hover:underline">Emergency</Link></li>
              <li><Link to="/ambulance" className="hover:underline">Ambulance</Link></li>
              <li><Link to="/enquiry" className="hover:underline">Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hospital Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/emergency" className="hover:underline">Hospital Emergency</Link></li>
              <li><Link to="/contact" className="hover:underline">Hospital Address</Link></li>
              <li><Link to="/operators" className="hover:underline">Operators</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm">
          <p>© 2025 Health Yojana Navigator. All Rights Reserved</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link to="/support" className="hover:underline">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
