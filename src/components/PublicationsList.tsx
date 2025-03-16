
import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Publication } from '@/data/publications';
import { Badge } from '@/components/ui/badge';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList = ({ publications }: PublicationsListProps) => {
  return (
    <div className="space-y-6 pr-4">
      {publications.map((pub) => (
        <div key={pub.id} className="flex gap-4 border-b border-gray-100 pb-6">
          <div className="flex-shrink-0 w-20 h-20 bg-researcher-muted flex items-center justify-center rounded-md overflow-hidden">
            <BookOpen className="h-10 w-10 text-researcher-primary" />
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">{pub.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {pub.authors.join(', ')} • {pub.venue} • {pub.year}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {pub.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="bg-researcher-muted/50 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            {pub.doi && (
              <a 
                href={`https://doi.org/${pub.doi}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-researcher-primary hover:underline"
              >
                View Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsList;
