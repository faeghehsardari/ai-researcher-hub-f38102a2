
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Filter } from "lucide-react";
import { newsItems, NewsItem } from "@/data/news";
import { Button } from "@/components/ui/button";

const News = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredNews = filter 
    ? newsItems.filter(item => item.category === filter) 
    : newsItems;
  
  const categories = Array.from(new Set(newsItems.map(item => item.category)));

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <div className="h-1 w-20 bg-researcher-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Stay updated with our latest research developments, publications, events, and announcements.
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            size="sm"
            className={filter === null ? "bg-researcher-primary hover:bg-researcher-primary/90" : ""}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              size="sm"
              className={filter === category ? "bg-researcher-primary hover:bg-researcher-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news items found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const NewsCard = ({ news }: { news: NewsItem }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="bg-researcher-muted text-researcher-primary">
            {news.category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(news.date)}
          </div>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2">{news.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{news.summary}</p>
        <Button variant="link" className="p-0 mt-4 text-researcher-primary hover:text-researcher-primary/80">
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default News;
