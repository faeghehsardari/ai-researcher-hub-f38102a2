
import React from 'react';
import { Brain, Code, Database, Network, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    title: "Deep Learning",
    description: "Developing advanced neural network architectures for complex learning tasks.",
    icon: Network
  },
  {
    title: "Natural Language Processing",
    description: "Creating systems that understand and generate human language with higher accuracy.",
    icon: Brain
  },
  {
    title: "Computer Vision",
    description: "Building models that can interpret and understand visual information from the world.",
    icon: Code
  },
  {
    title: "Reinforcement Learning",
    description: "Designing agents that learn optimal behavior through interaction with their environment.",
    icon: Zap
  },
  {
    title: "AI Ethics",
    description: "Ensuring AI systems are fair, transparent, and respect human values and privacy.",
    icon: Shield
  },
  {
    title: "Big Data Analytics",
    description: "Processing and analyzing large datasets to extract meaningful insights.",
    icon: Database
  }
];

const ResearchInterests = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Interests</h2>
          <div className="h-1 w-20 bg-researcher-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            My research spans several critical areas in artificial intelligence and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-researcher-primary/10">
                    <interest.icon className="h-6 w-6 text-researcher-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{interest.title}</h3>
                </div>
                <p className="text-gray-700">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
