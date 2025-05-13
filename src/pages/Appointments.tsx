
import React from "react";
import Layout from "@/components/layout/Layout";
import AppointmentBooking from "@/components/appointments/AppointmentBooking";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

const AppointmentsPage = () => {
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
              <BreadcrumbPage>Book Appointment</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground">
            Schedule an appointment with our specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AppointmentBooking />
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Appointment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Hospital Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Emergency Services Only</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Emergency Contact</h4>
                  <p className="text-sm text-muted-foreground">Phone: 1800-XXX-XXXX</p>
                  <p className="text-sm text-muted-foreground">Email: emergency@healthyojana.com</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Important Notes</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Please arrive 15 minutes before your appointment</li>
                    <li>Bring your insurance card and ID proof</li>
                    <li>Appointments can be rescheduled up to 24 hours in advance</li>
                    <li>Consultation fees apply as per department guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentsPage;
