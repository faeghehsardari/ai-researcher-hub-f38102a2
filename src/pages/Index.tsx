
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import News from '@/components/News';
import { newsItems } from '@/data/news';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Summary />
      <News news={newsItems} />
      
      {/* Contact form section will go here */}
      <section id="contact" className="py-16 bg-researcher-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8 text-gray-700">
              Interested in collaborating or have questions about our research? Send us a message.
            </p>
            {/* Contact form placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center text-gray-500">Contact form coming soon</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-researcher-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} AI Research Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
