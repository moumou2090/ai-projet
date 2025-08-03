import { Button } from "@/components/ui/button";
import heroDecoration from "@/assets/hero-decoration.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDecoration})` }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/10 rounded-full blur-md animate-pulse delay-500" />
      
      {/* Main content */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
            Oumayma
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Frontend Developer passionate about modern web technologies
          </p>
          
          <Button 
            variant="premium" 
            size="lg"
            className="text-lg px-8 py-6 shadow-glow hover-scale"
          >
            Afficher mes projets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;