
import { ArrowRight, Brain, Cpu, Network, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const researchAreas = [
  {
    title: "Machine Learning",
    description: "Developing novel algorithms and techniques to improve machine learning efficiency and accuracy.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Computer Vision",
    description: "Advancing state-of-the-art in visual recognition systems for various real-world applications.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Natural Language Processing",
    description: "Creating intelligent systems that understand, interpret, and generate human language.",
    icon: Network,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Ethics & Security",
    description: "Researching methods to ensure ethical, fair, and secure AI systems for societal benefit.",
    icon: Shield,
    color: "from-orange-500 to-amber-500"
  }
];

const Summary = () => {
  return (
    <section id="summary" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Summary</h2>
          <div className="h-1 w-20 bg-researcher-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Our research focuses on developing cutting-edge artificial intelligence technologies 
            that address real-world challenges and advance the field.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {researchAreas.map((area, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${area.color}`}>
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mt-2">{area.description}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4 text-researcher-primary hover:text-researcher-primary/80 p-0">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-none shadow-lg bg-gradient-to-r from-researcher-muted to-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="rounded-full bg-researcher-primary/10 p-5">
                  <Brain className="h-8 w-8 text-researcher-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Research Philosophy</h3>
                  <p className="text-gray-700">
                    We believe in AI research that combines theoretical innovation with practical application. 
                    Our interdisciplinary approach integrates expertise from computer science, 
                    mathematics, cognitive science, and ethics to develop AI systems that are 
                    not only technically advanced but also responsible and beneficial to society.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Summary;
