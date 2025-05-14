
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HomeIcon, Calendar, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";

const doctors = [
  {
    id: "dr-sharma",
    name: "Dr. Amit Sharma",
    specialty: "Neurosurgeon",
    experience: "15 years",
    hospital: "Apollo Hospital",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-patel",
    name: "Dr. Nisha Patel",
    specialty: "Neurologist",
    experience: "12 years",
    hospital: "Max Healthcare",
    rating: 4.7,
    available: true,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-khan",
    name: "Dr. Farhan Khan",
    specialty: "Ophthalmologist",
    experience: "10 years",
    hospital: "Fortis Hospital",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-gupta",
    name: "Dr. Sunita Gupta",
    specialty: "ENT Specialist",
    experience: "14 years",
    hospital: "Medanta Hospital",
    rating: 4.9,
    available: false,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-reddy",
    name: "Dr. Vikram Reddy",
    specialty: "Cardiologist",
    experience: "18 years",
    hospital: "Apollo Hospital",
    rating: 4.9,
    available: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-singh",
    name: "Dr. Manpreet Singh",
    specialty: "Cardiac Surgeon",
    experience: "16 years",
    hospital: "AIIMS",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-joshi",
    name: "Dr. Rahul Joshi",
    specialty: "Pediatric Cardiologist",
    experience: "9 years",
    hospital: "Fortis Hospital",
    rating: 4.6,
    available: false,
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-desai",
    name: "Dr. Priya Desai",
    specialty: "Neurologist",
    experience: "11 years",
    hospital: "Max Healthcare",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const DoctorsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const specialtyParam = queryParams.get("specialty") || "";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState(specialtyParam || "all");
  
  // Get unique specialties for filter dropdown
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  
  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialtyFilter === "all" || doctor.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

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
              <BreadcrumbPage>Doctors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Specialists</h1>
          <p className="text-muted-foreground">
            Find and book appointments with our qualified medical professionals
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="flex items-center">
              <Input 
                placeholder="Search doctor by name" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mr-2"
              />
              <Button size="icon" variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 md:text-right">
            <p className="text-sm text-muted-foreground">{filteredDoctors.length} doctors found</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  {doctor.name}
                </CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
                <div className="flex items-center mt-1">
                  {doctor.available ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                      Available
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
                      Unavailable
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="text-sm">
                  <span className="font-medium">Experience:</span> {doctor.experience}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Hospital:</span> {doctor.hospital}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Rating:</span> {doctor.rating}/5
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/appointments?doctor=${doctor.id}`} className="w-full">
                  <Button disabled={!doctor.available} className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg font-medium">No doctors found matching your search criteria</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DoctorsPage;
