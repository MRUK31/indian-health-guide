
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Shield } from "lucide-react";

interface Policy {
  id: number;
  name: string;
  provider: string;
  incomeLimit: string;
  coverage: string;
  eligibility: string;
  benefits: string;
  link: string;
}

const policies: Policy[] = [
  {
    id: 1,
    name: "Ayushman Bharat (PM-JAY)",
    provider: "Government",
    incomeLimit: "Below Poverty Line",
    coverage: "₹5 lakh per family per year",
    eligibility: "Based on Socio-Economic Caste Census (SECC) data for rural and urban poor.",
    benefits: "Secondary and tertiary care hospitalization including heart surgeries, brain surgery, ENT surgeries, cancer treatment, dialysis, etc.",
    link: "/policies/government/ayushman-bharat"
  },
  {
    id: 2,
    name: "Central Government Health Scheme (CGHS)",
    provider: "Government",
    incomeLimit: "Any (for Central Govt employees)",
    coverage: "Full coverage for approved treatments",
    eligibility: "Central govt. employees, pensioners, MPs, judges, etc.",
    benefits: "Outpatient and inpatient services, diagnostic tests, surgeries including ENT, neurology, cardiology.",
    link: "/policies/government/cghs"
  },
  {
    id: 3,
    name: "Employees' State Insurance Scheme (ESIS)",
    provider: "Government",
    incomeLimit: "Salary ≤ ₹21,000/month",
    coverage: "Full medical care",
    eligibility: "Employees earning ≤ ₹21,000/month in registered firms.",
    benefits: "Full medical care, surgery, maternity, ENT and cardiac surgery.",
    link: "/policies/government/esis"
  },
  {
    id: 4,
    name: "Rashtriya Arogya Nidhi (RAN)",
    provider: "Government",
    incomeLimit: "Below Poverty Line",
    coverage: "Case-by-case financial assistance",
    eligibility: "BPL patients suffering from life-threatening diseases.",
    benefits: "Financial assistance for treatment, including surgeries like heart transplants, neurological disorders, etc.",
    link: "/policies/government/ran"
  }
];

const PolicyFinder = () => {
  const [income, setIncome] = useState("");
  const [filteredPolicies, setFilteredPolicies] = useState<Policy[]>(policies);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    let filtered = [...policies];
    
    if (income) {
      const incomeValue = parseInt(income);
      if (incomeValue <= 30000) {
        filtered = filtered.filter(policy => 
          policy.incomeLimit.includes("Below Poverty Line") || 
          policy.incomeLimit.includes("Any") ||
          policy.incomeLimit.includes("≤ ₹21,000") 
        );
      } else if (incomeValue <= 100000) {
        filtered = filtered.filter(policy => 
          !policy.incomeLimit.includes("Below Poverty Line") ||
          policy.incomeLimit.includes("Any")
        );
      }
    }
    
    setFilteredPolicies(filtered);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Policy Finder</CardTitle>
        <CardDescription>Find healthcare policies based on your eligibility</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Monthly Income (₹)</Label>
            <Input
              id="income"
              type="number"
              placeholder="Enter your monthly income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <Button onClick={handleSearch} className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Find Policies
          </Button>
          
          {hasSearched && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Available Policies ({filteredPolicies.length})</h3>
              {filteredPolicies.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredPolicies.map((policy) => (
                    <AccordionItem key={policy.id} value={`policy-${policy.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center">
                          <Shield className="mr-2 h-4 w-4 text-primary" />
                          {policy.name}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium">Provider:</span>
                            <span className="col-span-2">{policy.provider}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium">Income Limit:</span>
                            <span className="col-span-2">{policy.incomeLimit}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium">Coverage:</span>
                            <span className="col-span-2">{policy.coverage}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium">Eligibility:</span>
                            <span className="col-span-2">{policy.eligibility}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium">Benefits:</span>
                            <span className="col-span-2">{policy.benefits}</span>
                          </div>
                          <div className="mt-2 pt-2 border-t">
                            <Button variant="outline" asChild className="w-full">
                              <a href={policy.link}>View Details</a>
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p>No policies match your criteria.</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyFinder;
