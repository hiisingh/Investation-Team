import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="text-destructive">Investation</span>
            <span className="text-primary"> Team</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            🇺🇸 English
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Create job alert
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
