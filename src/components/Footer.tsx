
import React from 'react';
import { Github, Twitter, Linkedin, GraduationCap, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-researcher-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl">Dr. Jane Smith</h3>
            <p className="text-gray-300 mt-1">AI Research Scientist</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/janesmith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://twitter.com/janesmith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://linkedin.com/in/janesmith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=janesmith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <GraduationCap className="h-5 w-5" />
              <span className="sr-only">Google Scholar</span>
            </a>
            <a 
              href="mailto:jane.smith@airesearch.org" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
