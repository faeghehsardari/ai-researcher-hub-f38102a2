
import React from "react";
import { Calendar } from "lucide-react";
import { newsItems } from "@/data/news";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="space-y-6 pr-4">
      {newsItems.map((news) => (
        <div key={news.id} className="border-b border-gray-100 pb-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="bg-researcher-muted text-researcher-primary">
              {news.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(news.date)}
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
          <p className="text-gray-700">{news.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
