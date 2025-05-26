
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whoWeAreItems = [
    { title: "History", href: "/history" },
    { title: "Vision & Mission", href: "/vision" },
    { title: "Board Members", href: "/board-members" },
    { title: "Team", href: "/team" },
    { title: "Advisory Committee", href: "/advisory" },
    { title: "Organization Certificates", href: "/certificates" },
  ];

  const currentActivityItems = [
    { title: "What's New", href: "/whats-new" },
    { title: "Events", href: "/events" },
    { title: "Gallery", href: "/gallery" },
  ];

  const achievementItems = [
    { title: "Awards", href: "/awards" },
    { title: "Sports", href: "/sports" },
    { title: "News", href: "/news" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-orange-600">Narmadalaya</span>
              <span className="text-xs text-gray-600">Charitable Trust</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600",
                      isActive("/") ? "text-orange-600" : "text-gray-700"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {whoWeAreItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Current Activity
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      {currentActivityItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuLink asChild>
                  <Link
                    to="/school"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600",
                      isActive("/school") ? "text-orange-600" : "text-gray-700"
                    )}
                  >
                    School
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Achievement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      {achievementItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuLink asChild>
                  <Link
                    to="/donation"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600",
                      isActive("/donation") ? "text-orange-600" : "text-gray-700"
                    )}
                  >
                    Donation
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link
                    to="/contact"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600",
                      isActive("/contact") ? "text-orange-600" : "text-gray-700"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Link to="/donation">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-medium py-2 text-orange-600">Who We Are</div>
                    {whoWeAreItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block pl-4 py-1 text-gray-600 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg font-medium py-2 text-orange-600">Current Activity</div>
                    {currentActivityItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block pl-4 py-1 text-gray-600 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/school"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    School
                  </Link>

                  <div className="space-y-2">
                    <div className="text-lg font-medium py-2 text-orange-600">Achievement</div>
                    {achievementItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block pl-4 py-1 text-gray-600 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/donation"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Donation
                  </Link>

                  <Link
                    to="/contact"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  <Button asChild className="mt-4 bg-gradient-to-r from-orange-500 to-red-500">
                    <Link to="/donation" onClick={() => setIsOpen(false)}>
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
