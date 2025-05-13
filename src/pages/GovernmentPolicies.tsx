
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FileText, HomeIcon, Shield } from "lucide-react";

const policies = [
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat (PM-JAY)",
    description: "₹5 lakh coverage per family annually for secondary and tertiary care.",
    eligibility: "Based on SECC data for rural and urban poor."
  },
  {
    id: "rashtriya-arogya-nidhi",
    name: "Rashtriya Arogya Nidhi (RAN)",
    description: "Financial assistance for BPL patients with life-threatening diseases.",
    eligibility: "BPL patients suffering from life-threatening diseases."
  },
  {
    id: "cghs",
    name: "Central Government Health Scheme",
    description: "Healthcare for central govt employees, pensioners and dependents.",
    eligibility: "Central govt. employees, pensioners, MPs, judges, etc."
  },
  {
    id: "esis",
    name: "Employees' State Insurance Scheme",
    description: "Healthcare for employees in registered firms earning below threshold.",
    eligibility: "Employees earning ≤ ₹21,000/month in registered firms."
  },
  {
    id: "national-dialysis-programme",
    name: "Pradhan Mantri National Dialysis Programme",
    description: "Free dialysis sessions at government facilities.",
    eligibility: "BPL and needy patients with end-stage renal disease."
  },
  {
    id: "pmsma",
    name: "Pradhan Mantri Surakshit Matritva Abhiyan",
    description: "Free prenatal check-ups and high-risk pregnancy identification.",
    eligibility: "Pregnant women, especially in 2nd & 3rd trimesters."
  },
  {
    id: "amrutam-yojana",
    name: "Mukhyamantri Amrutam Yojana (Gujarat)",
    description: "Up to ₹10 lakh coverage for major surgeries.",
    eligibility: "BPL and lower-middle-income families in Gujarat."
  },
  {
    id: "aarogyasri",
    name: "Rajiv Aarogyasri Scheme",
    description: "₹5 lakh for major surgeries including cancer, cardiac, neuro, ENT.",
    eligibility: "BPL families with white ration cards in Telangana/Andhra Pradesh."
  }
];

const GovernmentPoliciesPage = () => {
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
              <BreadcrumbPage>Government Policies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Government Healthcare Policies</h1>
          <p className="text-muted-foreground">
            Learn about healthcare schemes provided by the government
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <Card key={policy.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  {policy.name}
                </CardTitle>
                <CardDescription>{policy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">Eligibility: </span>
                    <span className="text-muted-foreground">{policy.eligibility}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/policies/government/${policy.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/policy-finder">
            <Button>
              Find Policies You're Eligible For
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default GovernmentPoliciesPage;
