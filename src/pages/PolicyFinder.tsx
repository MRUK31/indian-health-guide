
import React from "react";
import Layout from "@/components/layout/Layout";
import PolicyFinder from "@/components/policies/PolicyFinder";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

const PolicyFinderPage = () => {
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
              <BreadcrumbLink href="#">Policy Finder</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Personal Policy Finder</h1>
          <p className="text-muted-foreground">
            Find healthcare policies that match your eligibility criteria
          </p>
        </div>
        
        <PolicyFinder />
        
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">How to Use the Policy Finder</h2>
          <ol className="text-left space-y-2 list-decimal list-inside">
            <li>Enter your monthly income in the field provided</li>
            <li>Click "Find Policies" to see relevant healthcare schemes</li>
            <li>Expand each policy to view detailed eligibility criteria and benefits</li>
            <li>Click "View Details" to learn more about a specific policy</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyFinderPage;
