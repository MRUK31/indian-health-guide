
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Heart, Book, Hospital } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Book Appointments",
      description: "Schedule appointments with our specialists",
      icon: Calendar,
      link: "/appointments"
    },
    {
      id: 2,
      title: "Medical Records",
      description: "Access your medical history and test results",
      icon: Book,
      link: "/medical-records"
    },
    {
      id: 3,
      title: "Hospital Services",
      description: "View our comprehensive hospital services",
      icon: Hospital,
      link: "/services"
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-muted-foreground">Explore our complete range of healthcare services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <IconComponent className="mr-2 h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to={service.link} className="w-full">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
