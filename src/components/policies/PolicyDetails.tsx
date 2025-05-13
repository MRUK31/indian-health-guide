
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Check, Info } from "lucide-react";

interface PolicyDetailsProps {
  name: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  coverage: string;
  hospitals: string;
}

const PolicyDetails = ({ 
  name, 
  description, 
  eligibility, 
  benefits, 
  coverage, 
  hospitals 
}: PolicyDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center mb-2">
          <Shield className="h-5 w-5 mr-2 text-primary" />
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2 text-primary" />
            Eligibility
          </h3>
          <ul className="space-y-2">
            {eligibility.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2 text-primary" />
            Benefits
          </h3>
          <ul className="space-y-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2 text-primary" />
            Coverage
          </h3>
          <p>{coverage}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2 text-primary" />
            Hospitals
          </h3>
          <p>{hospitals}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyDetails;
