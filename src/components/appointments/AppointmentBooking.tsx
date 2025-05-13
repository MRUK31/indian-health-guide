
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM"
];

const departments = [
  "Neurosurgery", "Neurology", "Ophthalmology", 
  "ENT", "Cardiology", "Cardiac Surgery", 
  "Pediatric Cardiology"
];

const AppointmentBooking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name || !phone || !date || !selectedTime || !selectedDepartment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Appointment Booked",
      description: `Your appointment has been scheduled for ${date} at ${selectedTime}`,
    });
    
    // Clear form
    setName("");
    setPhone("");
    setDate("");
    setSelectedTime("");
    setSelectedDepartment("");
  };

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
        <CardDescription>Schedule an appointment with our specialists</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <select
              id="department"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> Appointment Date
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="flex items-center">
              <Clock className="h-4 w-4 mr-1" /> Available Time Slots
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  className="text-xs h-8"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">Book Appointment</Button>
      </CardFooter>
    </Card>
  );
};

export default AppointmentBooking;
