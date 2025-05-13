
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Hospital, Stethoscope, Ambulance, Pill, User } from "lucide-react";
import { Link } from "react-router-dom";

const HospitalServices = () => {
  const emergencyServices = [
    {
      id: 1,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services",
      icon: Ambulance
    },
    {
      id: 2,
      title: "Trauma Center",
      description: "Advanced trauma care for critical injuries",
      icon: Hospital
    },
    {
      id: 3,
      title: "Cardiac Emergency",
      description: "Immediate response for cardiac emergencies",
      icon: Heart
    },
  ];

  const specialistServices = [
    {
      id: 1,
      title: "Cardiology",
      description: "Heart diseases diagnosis and treatment",
      procedures: ["Angiography", "Angioplasty", "Cardiac Surgery", "Heart Transplant"],
      icon: Heart
    },
    {
      id: 2,
      title: "Neurology",
      description: "Brain and nervous system treatments",
      procedures: ["Brain Surgery", "Spine Surgery", "Neurovascular Procedures"],
      icon: Stethoscope
    },
    {
      id: 3,
      title: "ENT",
      description: "Ear, Nose and Throat specialists",
      procedures: ["Cochlear Implants", "Sinus Surgery", "Tonsillectomy"],
      icon: Pill
    },
    {
      id: 4,
      title: "General Medicine",
      description: "Comprehensive medical care for all conditions",
      procedures: ["Preventive Care", "Chronic Disease Management", "Health Check-ups"],
      icon: User
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Hospital Services</h1>
        <p className="text-muted-foreground mb-8">Comprehensive healthcare services for all your needs</p>

        <Tabs defaultValue="specialists" className="mt-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="specialists">Specialist Services</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specialists" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialistServices.map((service) => {
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
                    <CardContent>
                      <p className="text-sm font-medium mb-2">Procedures:</p>
                      <ul className="list-disc list-inside text-sm pl-2">
                        {service.procedures.map((procedure, idx) => (
                          <li key={idx}>{procedure}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link to="/appointments" className="w-full">
                        <Button className="w-full">Book Appointment</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="emergency" className="mt-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <Ambulance className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="font-semibold text-red-700">Emergency Hotline: 1-800-123-4567</h3>
              </div>
              <p className="text-sm text-red-700">For life-threatening emergencies, please call immediately or proceed to our emergency department.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="mr-2 h-5 w-5 text-primary" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default HospitalServices;
