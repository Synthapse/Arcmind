import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface Motivation {
  title: string;
  motivatedBy: string[];
  bookCategories: string[];
}

const ReadingMotivationSelector = () => {
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);

  const motivations: Motivation[] = [
    {
      title: 'Curiosity & Learning',
      motivatedBy: [
        'Intellectual curiosity',
        'A desire for personal or professional growth',
        'Staying informed'
      ],
      bookCategories: [
        'Non-fiction (History, Science, Psychology)',
        'Biographies & Memoirs',
        'Self-help / Personal development',
        'Business & Productivity',
        'Philosophy'
      ]
    },
    {
      title: 'Self-Reflection & Emotional Growth',
      motivatedBy: [
        'Healing or navigating emotions',
        'Exploring identity',
        'Seeking meaning or purpose'
      ],
      bookCategories: [
        'Memoirs / Life stories',
        'Psychology & mental health',
        'Spirituality',
        'Literary fiction',
        'Journals & guided workbooks'
      ]
    },
    {
      title: 'Escapism & Entertainment',
      motivatedBy: [
        'Relaxation or fun',
        'Stress relief',
        'Adventure or fantasy'
      ],
      bookCategories: [
        'Fiction (Fantasy, Sci-fi, Romance, Thriller, Mystery)',
        'Young Adult (YA)',
        'Graphic novels & Comics'
      ]
    },
    {
      title: 'Social Connection & Belonging',
      motivatedBy: [
        'Book clubs or discussions',
        'Cultural relevance (e.g. trending books)',
        'Understanding different perspectives'
      ],
      bookCategories: [
        'Contemporary fiction',
        'Memoirs',
        'Social issues / current events',
        'Popular bestsellers'
      ]
    },
    {
      title: 'Practical Needs',
      motivatedBy: [
        'Solving a problem',
        'Gaining a skill',
        'Planning or preparing for something'
      ],
      bookCategories: [
        'How-to guides',
        'Cookbooks',
        'Travel books',
        'Parenting / Health / Fitness',
        'Technical / Professional manuals'
      ]
    }
  ];

  const handleMotivationToggle = (title: string) => {
    setSelectedMotivations(prev => 
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            What Drives Your Reading?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Select the motivations that resonate with you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motivations.map((motivation) => (
            <Card 
              key={motivation.title} 
              className={`transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                selectedMotivations.includes(motivation.title) 
                  ? "border-primary ring-1 ring-primary" 
                  : "border-border"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`checkbox-${motivation.title}`}
                    checked={selectedMotivations.includes(motivation.title)}
                    onCheckedChange={() => handleMotivationToggle(motivation.title)}
                  />
                  <Label 
                    htmlFor={`checkbox-${motivation.title}`}
                    className="font-bold text-lg cursor-pointer"
                  >
                    {motivation.title}
                  </Label>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Motivated by:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {motivation.motivatedBy.map((item) => (
                        <span 
                          key={item}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-muted text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Book categories:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {motivation.bookCategories.map((category) => (
                        <span 
                          key={category}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border border-border text-muted-foreground"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant={selectedMotivations.includes(motivation.title) ? "outline" : "default"}
                  size="sm"
                  onClick={() => handleMotivationToggle(motivation.title)}
                  className="w-full"
                >
                  {selectedMotivations.includes(motivation.title) ? 'Deselect' : 'Select this motivation'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {selectedMotivations.length > 0 && (
          <div className="mt-12 p-6 border rounded-lg bg-card">
            <h3 className="font-semibold text-lg mb-4">Your Selected Reading Motivations:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedMotivations.map((motivation) => (
                <span 
                  key={motivation}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary text-primary-foreground"
                >
                  {motivation}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadingMotivationSelector; 