
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, MessageCircle, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl text-primary">Космос</Link>
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск..."
              className="pl-8 w-full"
            />
          </div>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link to="/">
                <div className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full bg-accent hover:bg-accent/80"
                )}>
                  <Home className="h-5 w-5" />
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/messages">
                <div className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full bg-accent hover:bg-accent/80 relative"
                )}>
                  <MessageCircle className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">3</span>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full bg-accent hover:bg-accent/80 relative"
              )}>
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">5</span>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/profile">
                <Avatar className="h-9 w-9 border-2 border-transparent hover:border-primary transition-all">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" alt="Космонавт" />
                  <AvatarFallback>КЮ</AvatarFallback>
                </Avatar>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
