
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FileText, HomeIcon, Shield } from "lucide-react";

const policies = [
  {
    id: "star-health",
    name: "Star Health Insurance",
    description: "Comprehensive health insurance with cashless hospitalization.",
    eligibility: "All individuals aged 18-65 years."
  },
  {
    id: "hdfc-ergo",
    name: "HDFC ERGO Health Insurance",
    description: "Family floater policies with extensive hospital network coverage.",
    eligibility: "Families with members aged 3 months to 65 years."
  },
  {
    id: "icici-lombard",
    name: "ICICI Lombard Health Insurance",
    description: "Complete health insurance with OPD coverage and wellness benefits.",
    eligibility: "All individuals aged 5-65 years."
  },
  {
    id: "max-bupa",
    name: "Max Bupa Health Insurance",
    description: "Individual and family coverage with lifetime renewability.",
    eligibility: "All age groups with different premium structures."
  },
  {
    id: "apollo-munich",
    name: "Apollo Munich Health Insurance",
    description: "Specialized health insurance with restore benefits.",
    eligibility: "All individuals aged 5-65 years without medical tests."
  },
  {
    id: "aditya-birla",
    name: "Aditya Birla Health Insurance",
    description: "Health insurance with proactive care and wellness programs.",
    eligibility: "All individuals aged 5-70 years."
  },
  {
    id: "bajaj-allianz",
    name: "Bajaj Allianz Health Insurance",
    description: "Health insurance plans with no room rent capping.",
    eligibility: "Individuals aged 3 months to 80 years."
  },
  {
    id: "religare",
    name: "Religare Health Insurance",
    description: "Customizable health insurance with no claim bonus benefits.",
    eligibility: "All individuals aged up to 65 years."
  }
];

const PrivatePoliciesPage = () => {
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
              <BreadcrumbPage>Private Policies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Private Health Insurance Policies</h1>
          <p className="text-muted-foreground">
            Explore private health insurance options for comprehensive coverage
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
                <Link to={`/policies/private/${policy.id}`} className="w-full">
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

export default PrivatePoliciesPage;
