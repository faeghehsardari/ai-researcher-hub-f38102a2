
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Image } from 'lucide-react';

// Sample gallery data - in a real scenario, you might want to move this to a separate file
const galleryItems = [
  {
    id: 1,
    title: 'Conference Presentation',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    description: 'Presenting our latest research at NeurIPS 2023',
  },
  {
    id: 2,
    title: 'Lab Team',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    description: 'Our research team during the annual retreat',
  },
  {
    id: 3,
    title: 'Research Equipment',
    image: 'https://images.unsplash.com/photo-1581091226033-c6e0f4f37ba7',
    description: 'Our new computing cluster for large-scale experiments',
  },
  {
    id: 4,
    title: 'Workshop Discussion',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c',
    description: 'Interactive session at the AI Ethics Workshop',
  },
  {
    id: 5,
    title: 'Field Research',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    description: 'Collecting real-world data for our latest project',
  },
  {
    id: 6,
    title: 'Award Ceremony',
    image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5',
    description: 'Receiving the Best Paper Award at ICML 2022',
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-researcher-muted">
                    <Image className="h-12 w-12 text-researcher-primary opacity-50" />
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
