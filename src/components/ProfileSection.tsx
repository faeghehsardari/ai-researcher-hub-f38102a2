
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section className="py-16 bg-researcher-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gradient-to-br from-researcher-primary to-researcher-accent p-8 flex items-center justify-center">
                  <div className="relative">
                    <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
                      <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Researcher" />
                      <AvatarFallback className="text-4xl">AR</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Dr. Jane Smith</h2>
                  <h3 className="text-xl text-researcher-primary mb-4">Senior AI Research Scientist</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">About Me</h4>
                    <p className="text-gray-700">
                      I am a senior researcher in artificial intelligence with over 10 years of experience 
                      in machine learning, natural language processing, and computer vision. My work focuses 
                      on developing efficient and interpretable AI systems that can solve real-world problems.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Contact Information</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Email: jane.smith@airesearch.org</li>
                      <li>Office: AI Research Building, Room 305</li>
                      <li>Phone: (123) 456-7890</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
