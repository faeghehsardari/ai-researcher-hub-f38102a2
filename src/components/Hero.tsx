
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="min-h-[92vh] flex items-center pt-16 bg-gradient-to-br from-white via-researcher-muted to-researcher-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Advancing AI Research for a <span className="text-researcher-primary">Better Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Exploring the frontiers of artificial intelligence through innovative research, 
              collaborative partnerships, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => {
                  const researchSection = document.getElementById("summary");
                  if (researchSection) {
                    researchSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-researcher-primary hover:bg-researcher-primary/90"
              >
                Explore Research
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-researcher-primary text-researcher-primary hover:bg-researcher-primary/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute top-0 left-0 w-72 h-72 bg-researcher-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-researcher-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
              <div className="absolute bottom-0 left-28 w-72 h-72 bg-researcher-secondary/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="w-full aspect-square bg-gradient-to-br from-researcher-primary/10 via-researcher-muted to-researcher-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-researcher-primary to-researcher-accent">
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
