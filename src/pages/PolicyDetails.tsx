
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PolicyDetails from "@/components/policies/PolicyDetails";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

// Sample policy data
const policiesData = {
  "ayushman-bharat": {
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    description: "Flagship scheme of the Government of India that provides health coverage to low-income households.",
    eligibility: [
      "Based on Socio-Economic Caste Census (SECC) data for rural and urban poor.",
      "All families listed in the SECC database as per defined criteria.",
      "No cap on family size or age."
    ],
    benefits: [
      "₹5 lakh coverage per family per year for secondary and tertiary care hospitalization.",
      "Covers heart surgeries, brain surgery, ENT surgeries, cancer treatment, dialysis, etc.",
      "Pre and post-hospitalization expenses covered.",
      "No restriction on pre-existing conditions."
    ],
    coverage: "Covers medical and hospitalization expenses for secondary and tertiary care procedures. Over 1,500 procedures are included under the scheme.",
    hospitals: "All public and empanelled private hospitals across India."
  },
  "rashtriya-arogya-nidhi": {
    name: "Rashtriya Arogya Nidhi (RAN)",
    description: "Financial assistance program for patients living below poverty line who are suffering from life-threatening diseases.",
    eligibility: [
      "BPL patients suffering from life-threatening diseases.",
      "Patient must be receiving treatment at a government hospital.",
      "Monthly income should be below the defined threshold."
    ],
    benefits: [
      "Financial assistance for treatment, including surgeries like heart transplants, neurological disorders, etc.",
      "One-time grant for major surgeries and procedures.",
      "Full or partial coverage depending on the case and available funds."
    ],
    coverage: "The financial assistance provided varies on a case-by-case basis, depending on the patient's medical needs and the availability of funds.",
    hospitals: "Tertiary care institutions like AIIMS, PGIMER, and other government hospitals."
  },
  "cghs": {
    name: "Central Government Health Scheme (CGHS)",
    description: "Comprehensive healthcare scheme for central government employees, pensioners, and their dependents.",
    eligibility: [
      "Central government employees, pensioners, MPs, judges, etc.",
      "Dependent family members as specified under the scheme.",
      "Freedom fighters and their dependents."
    ],
    benefits: [
      "Outpatient and inpatient services, diagnostic tests, surgeries including ENT, neurology, cardiology.",
      "Cashless treatment in empaneled hospitals.",
      "Reimbursement facility for non-empaneled hospitals in emergencies.",
      "Coverage for specialized treatments and surgeries."
    ],
    coverage: "Comprehensive medical coverage including OPD consultations, investigations, indoor treatment, specialized treatments and surgeries as per CGHS rates.",
    hospitals: "CGHS wellness centers and empanelled private hospitals in metro cities and other locations where CGHS is operational."
  },
  "esis": {
    name: "Employees' State Insurance Scheme (ESIS)",
    description: "Social security scheme for workers in the organized sector, providing comprehensive medical care.",
    eligibility: [
      "Employees earning ≤ ₹21,000/month in registered firms.",
      "Dependent family members.",
      "Firms with 10 or more employees (20 in some regions)."
    ],
    benefits: [
      "Full medical care, surgery, maternity, ENT and cardiac surgery.",
      "Cash benefits during sickness, maternity, and disability.",
      "Pension for dependents in case of death due to work injury."
    ],
    coverage: "Comprehensive medical care including preventive, promotive, curative and rehabilitative services.",
    hospitals: "ESI hospitals and dispensaries across the country."
  }
};

const PolicyDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const policyData = id ? policiesData[id as keyof typeof policiesData] : null;
  
  if (!policyData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Policy Not Found</h1>
          <p>The policy you're looking for doesn't exist or has been moved.</p>
        </div>
      </Layout>
    );
  }

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
              <BreadcrumbLink href="/policies/government">Government Policies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{policyData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{policyData.name}</h1>
          <p className="text-muted-foreground">{policyData.description}</p>
        </div>
        
        <PolicyDetails
          name={policyData.name}
          description={policyData.description}
          eligibility={policyData.eligibility}
          benefits={policyData.benefits}
          coverage={policyData.coverage}
          hospitals={policyData.hospitals}
        />
      </div>
    </Layout>
  );
};

export default PolicyDetailsPage;
