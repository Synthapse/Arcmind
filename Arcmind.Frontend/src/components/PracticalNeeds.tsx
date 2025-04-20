import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const PracticalNeeds = () => {  
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Practical Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Recommended books for technical and professional growth
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <a 
            href="https://www.kaggle.com/discussions/getting-started/263723"
            className="flex items-center justify-center p-6 border rounded-lg bg-card hover:bg-card/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="text-2xl">
                📓 Free Books to Learn Machine Learning and Data Science Effectively 📚
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                View on Kaggle <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticalNeeds; 