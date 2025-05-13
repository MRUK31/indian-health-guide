
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, User } from "lucide-react";

const doctorSpecialties = [
  { id: 1, name: "Neurosurgeon" },
  { id: 2, name: "Neurologist" },
  { id: 3, name: "Ophthalmologist" },
  { id: 4, name: "ENT Specialist" },
  { id: 5, name: "Cardiologist" },
  { id: 6, name: "Cardiac Surgeon" },
  { id: 7, name: "Pediatric Cardiologist" }
];

const SearchWindow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSpecialties, setFilteredSpecialties] = useState(doctorSpecialties);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredSpecialties(doctorSpecialties);
    } else {
      const filtered = doctorSpecialties.filter(specialty => 
        specialty.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSpecialties(filtered);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Find a Doctor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search by specialty</Label>
            <div className="flex gap-2">
              <Input 
                id="search" 
                placeholder="e.g. Cardiologist" 
                value={searchQuery}
                onChange={handleSearch}
              />
              <Button type="submit">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {filteredSpecialties.map(specialty => (
              <Button 
                key={specialty.id} 
                variant="outline" 
                className="justify-start text-sm"
                asChild
              >
                <a href={`/doctors?specialty=${specialty.name}`}>
                  <User className="mr-2 h-4 w-4" />
                  {specialty.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchWindow;
