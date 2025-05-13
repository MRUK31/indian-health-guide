
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ClipboardList, Download } from "lucide-react";

const MedicalRecords = () => {
  // This would normally come from a database
  const reports = [
    { id: 1, name: "Blood Test", date: "2025-04-15", doctor: "Dr. Sharma", status: "completed" },
    { id: 2, name: "X-Ray Report", date: "2025-04-10", doctor: "Dr. Patel", status: "completed" },
    { id: 3, name: "MRI Scan", date: "2025-04-02", doctor: "Dr. Gupta", status: "completed" },
    { id: 4, name: "Cardiology Report", date: "2025-03-28", doctor: "Dr. Singh", status: "completed" },
  ];

  const prescriptions = [
    { id: 1, date: "2025-04-15", doctor: "Dr. Sharma", medications: ["Paracetamol 500mg", "Vitamin D3"] },
    { id: 2, date: "2025-04-10", doctor: "Dr. Patel", medications: ["Amoxicillin 250mg", "Paracetamol 500mg"] },
    { id: 3, date: "2025-03-20", doctor: "Dr. Gupta", medications: ["Omeprazole 20mg", "Pantoprazole 40mg"] },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Medical Records</h1>

        <div className="mb-10 bg-muted/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Name</p>
              <p className="font-medium">Raj Patel</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Age</p>
              <p className="font-medium">42 years</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Blood Group</p>
              <p className="font-medium">O+</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Patient ID</p>
              <p className="font-medium">HNY-287654</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="reports" className="mt-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="reports">Test Reports</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report) => (
                <Card key={report.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" /> {report.name}
                    </CardTitle>
                    <CardDescription>
                      Date: {report.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm">Doctor: {report.doctor}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="prescriptions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prescriptions.map((prescription) => (
                <Card key={prescription.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <ClipboardList className="mr-2 h-5 w-5 text-primary" /> Prescription
                    </CardTitle>
                    <CardDescription>
                      Date: {prescription.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm mb-1">Doctor: {prescription.doctor}</p>
                    <p className="text-sm font-medium mt-2">Medications:</p>
                    <ul className="list-disc list-inside text-sm pl-2 mt-1">
                      {prescription.medications.map((med, idx) => (
                        <li key={idx}>{med}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Prescription
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MedicalRecords;
