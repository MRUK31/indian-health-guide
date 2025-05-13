
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Info, Shield } from "lucide-react";

const PolicySection = () => {
  const policies = [
    {
      id: 1,
      title: "Ayushman Bharat (PM-JAY)",
      description: "₹5 lakh coverage per family annually for secondary and tertiary care",
      link: "/policies/government/ayushman-bharat"
    },
    {
      id: 2,
      title: "Rashtriya Arogya Nidhi (RAN)",
      description: "Financial assistance for BPL patients with life-threatening diseases",
      link: "/policies/government/rashtriya-arogya-nidhi"
    },
    {
      id: 3,
      title: "Central Government Health Scheme",
      description: "Healthcare for central govt employees, pensioners and dependents",
      link: "/policies/government/cghs"
    }
  ];

  return (
    <div className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Healthcare Policies</h2>
          <p className="text-muted-foreground">Learn about government and private healthcare policies available to you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <Card key={policy.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  {policy.title}
                </CardTitle>
                <CardDescription>{policy.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={policy.link} className="w-full">
                  <Button variant="outline" className="w-full">
                    <Info className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/policy-finder">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Find Your Policy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
