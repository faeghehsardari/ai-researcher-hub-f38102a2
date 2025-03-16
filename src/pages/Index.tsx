
import React from 'react';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import Summary from '@/components/Summary';
import News from '@/components/News';
import PublicationsList from '@/components/PublicationsList';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { publications } from '@/data/publications';
import { newsItems } from '@/data/news';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Profile Section with picture and brief intro */}
      <ProfileSection />
      
      {/* Research Summary */}
      <Summary />
      
      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <News />
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="py-16 bg-researcher-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Publications</h2>
          <PublicationsList publications={publications} />
        </div>
      </section>
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
