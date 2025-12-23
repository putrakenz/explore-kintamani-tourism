import { Button } from "@/components/ui/button";
import { Search, Globe, Menu, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-primary hidden sm:block">explorekintamani</span>
            </a>
          </div>
          
          {/* Center Search Bar - Airbnb Style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border border-border rounded-full shadow-sm hover:shadow-md transition-shadow">
              <button className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-l-full transition-colors">
                Experiences
              </button>
              <div className="w-px h-6 bg-border"></div>
              <button className="px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors">
                Services
              </button>
              <div className="w-px h-6 bg-border"></div>
              <button className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors">
                Book now
              </button>
              <button className="p-2 mx-1 bg-primary rounded-full text-primary-foreground">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex font-medium">
              Become a Host
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 border border-border rounded-full p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer">
              <Menu className="w-4 h-4" />
              <div className="w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;