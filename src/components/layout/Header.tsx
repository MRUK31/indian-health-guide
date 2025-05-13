
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ambulance, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center text-xl font-bold text-primary">
            <div className="text-primary mr-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5" />
                <path d="M12 19V5" />
                <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
              </svg>
            </div>
            <span>HNY</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Policies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <Link to="/policies/government" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Government Policies</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Government healthcare schemes and policies
                    </p>
                  </Link>
                  <Link to="/policies/private" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Private Policies</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Private insurance and healthcare plans
                    </p>
                  </Link>
                  <Link to="/policy-finder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Personal Policy Finder</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Find the right policy for your needs
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <Link to="/departments/brain" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Brain</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Neurosurgery, Neurology
                    </p>
                  </Link>
                  <Link to="/departments/eye" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Eye</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Ophthalmology
                    </p>
                  </Link>
                  <Link to="/departments/ent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">ENT</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Ear, Nose, Throat
                    </p>
                  </Link>
                  <Link to="/departments/heart" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Heart</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Angiography, Angioplasty, Cardiac surgery, Heart Transplant
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/overview">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Overview
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Link to="/emergency">
            <Button variant="destructive" size="sm" className="hidden md:flex">
              <Ambulance className="mr-1" size={16} /> Emergency
            </Button>
          </Link>
          <div className="flex items-center">
            <Link to="/login" className="mr-2">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">
                <User className="mr-1" size={16} />
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
