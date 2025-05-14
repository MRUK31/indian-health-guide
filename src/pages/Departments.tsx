
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon, Brain, Eye, ListChecks, Heart, Stethoscope, Baby, Bone, Dna } from "lucide-react";

const departments = [
  {
    id: "brain",
    name: "Brain Department",
    description: "Neurosurgery and Neurology treatments",
    image: "/images/brain-department.jpg",
    icon: Brain,
    specialists: 12,
    services: ["Brain Tumor Surgery", "Epilepsy Treatment", "Stroke Management", "Parkinson's Disease Treatment"],
  },
  {
    id: "eye",
    name: "Eye Department",
    description: "Comprehensive eye care services",
    image: "/images/eye-department.jpg",
    icon: Eye,
    specialists: 8,
    services: ["Cataract Surgery", "Glaucoma Treatment", "LASIK", "Retinal Detachment Surgery"],
  },
  {
    id: "ent",
    name: "ENT Department",
    description: "Ear, Nose and Throat specialty care",
    image: "/images/ent-department.jpg",
    icon: ListChecks,
    specialists: 6,
    services: ["Tonsillectomy", "Sinus Surgery", "Hearing Implants", "Voice Disorders Treatment"],
  },
  {
    id: "heart",
    name: "Heart Department",
    description: "Cardiac care and treatment",
    image: "/images/heart-department.jpg",
    icon: Heart,
    specialists: 15,
    services: ["Angioplasty", "Bypass Surgery", "Heart Valve Replacement", "Cardiac Rehabilitation"],
  },
  {
    id: "general",
    name: "General Medicine",
    description: "Primary healthcare services",
    image: "/images/general-medicine.jpg",
    icon: Stethoscope,
    specialists: 20,
    services: ["Routine Check-ups", "Preventive Care", "Chronic Disease Management", "Health Screenings"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Healthcare for infants, children, and adolescents",
    image: "/images/pediatrics-department.jpg",
    icon: Baby,
    specialists: 10,
    services: ["Well-Child Visits", "Immunizations", "Developmental Assessments", "Pediatric Urgent Care"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Bone and joint care services",
    image: "/images/orthopedics-department.jpg",
    icon: Bone,
    specialists: 8,
    services: ["Joint Replacement", "Sports Injuries", "Spine Surgery", "Fracture Care"],
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Cancer diagnosis and treatment",
    image: "/images/oncology-department.jpg",
    icon: Dna,
    specialists: 12,
    services: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Cancer Screenings"],
  },
];

const DepartmentsPage = () => {
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
              <BreadcrumbPage>Departments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Hospital Departments</h1>
          <p className="text-muted-foreground">
            Explore our specialized departments and healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((department) => {
            const IconComponent = department.icon;
            return (
              <Card key={department.id} className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={department.image} 
                    alt={department.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <IconComponent className="mr-2 h-5 w-5 text-primary" />
                    {department.name}
                  </CardTitle>
                  <CardDescription>{department.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <span className="font-medium">{department.specialists}</span> specialists
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium">Key services:</span> {department.services.slice(0, 2).join(", ")}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/departments/${department.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Department
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default DepartmentsPage;
