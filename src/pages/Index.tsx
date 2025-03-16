
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import ResearchInterests from '@/components/ResearchInterests';
import ProfileSection from '@/components/ProfileSection';
import PublicationsList from '@/components/PublicationsList';
import { newsItems } from '@/data/news';
import { publications } from '@/data/publications';
import News from '@/components/News';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileSection />
      <Summary />
      <ResearchInterests />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>
              <News />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Publications</h2>
              <PublicationsList publications={publications} />
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-researcher-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8 text-gray-700">
              Interested in collaborating or have questions about our research? Send us a message.
            </p>
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
