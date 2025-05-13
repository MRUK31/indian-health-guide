
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Shield, Brain, Ear, Eye, Heart, Activity } from "lucide-react";
import { useForm } from "react-hook-form";

interface Policy {
  id: number;
  name: string;
  provider: string;
  incomeLimit: string;
  coverage: string;
  eligibility: string;
  benefits: string;
  link: string;
  departments: string[];
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
    link: "/policies/government/ayushman-bharat",
    departments: ["Heart", "Brain", "ENT", "Cancer", "Kidney"]
  },
  {
    id: 2,
    name: "Central Government Health Scheme (CGHS)",
    provider: "Government",
    incomeLimit: "Any (for Central Govt employees)",
    coverage: "Full coverage for approved treatments",
    eligibility: "Central govt. employees, pensioners, MPs, judges, etc.",
    benefits: "Outpatient and inpatient services, diagnostic tests, surgeries including ENT, neurology, cardiology.",
    link: "/policies/government/cghs",
    departments: ["ENT", "Brain", "Heart", "General"]
  },
  {
    id: 3,
    name: "Employees' State Insurance Scheme (ESIS)",
    provider: "Government",
    incomeLimit: "Salary ≤ ₹21,000/month",
    coverage: "Full medical care",
    eligibility: "Employees earning ≤ ₹21,000/month in registered firms.",
    benefits: "Full medical care, surgery, maternity, ENT and cardiac surgery.",
    link: "/policies/government/esis",
    departments: ["ENT", "Heart", "Maternity", "General"]
  },
  {
    id: 4,
    name: "Rashtriya Arogya Nidhi (RAN)",
    provider: "Government",
    incomeLimit: "Below Poverty Line",
    coverage: "Case-by-case financial assistance",
    eligibility: "BPL patients suffering from life-threatening diseases.",
    benefits: "Financial assistance for treatment, including surgeries like heart transplants, neurological disorders, etc.",
    link: "/policies/government/ran",
    departments: ["Heart", "Brain", "Cancer"]
  }
];

interface FormValues {
  income: string;
  department: string;
}

const departments = [
  { value: "all", label: "All Departments", icon: Activity },
  { value: "Heart", label: "Heart/Cardiac", icon: Heart },
  { value: "Brain", label: "Brain/Neurology", icon: Brain },
  { value: "ENT", label: "ENT", icon: Ear },
  { value: "Eye", label: "Eye/Ophthalmology", icon: Eye },
  { value: "Cancer", label: "Cancer/Oncology", icon: Activity },
  { value: "Kidney", label: "Kidney/Nephrology", icon: Activity },
  { value: "Maternity", label: "Maternity", icon: Activity },
  { value: "General", label: "General Medicine", icon: Activity }
];

const PolicyFinder = () => {
  const [filteredPolicies, setFilteredPolicies] = useState<Policy[]>(policies);
  const [hasSearched, setHasSearched] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      income: "",
      department: "all"
    }
  });

  const handleSearch = (values: FormValues) => {
    setHasSearched(true);
    let filtered = [...policies];
    
    // Income filtering
    if (values.income) {
      const incomeValue = parseInt(values.income);
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
    
    // Department filtering
    if (values.department && values.department !== "all") {
      filtered = filtered.filter(policy => 
        policy.departments.includes(values.department)
      );
    }
    
    setFilteredPolicies(filtered);
  };

  const getDepartmentIcon = (departmentName: string) => {
    const dept = departments.find(d => d.value === departmentName);
    return dept ? dept.icon : Activity;
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Policy Finder</CardTitle>
        <CardDescription>Find healthcare policies based on your eligibility</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-4">
            <FormField
              control={form.control}
              name="income"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Income (₹)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your monthly income"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical Department</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          <div className="flex items-center">
                            <dept.icon className="mr-2 h-4 w-4 text-primary" />
                            {dept.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Find Policies
            </Button>
          </form>
        </Form>
          
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
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <span className="font-medium">Departments:</span>
                          <div className="col-span-2 flex flex-wrap gap-1">
                            {policy.departments.map((dept) => {
                              const DeptIcon = getDepartmentIcon(dept);
                              return (
                                <span key={dept} className="inline-flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                  <DeptIcon className="mr-1 h-3 w-3" />
                                  {dept}
                                </span>
                              );
                            })}
                          </div>
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
      </CardContent>
    </Card>
  );
};

export default PolicyFinder;
