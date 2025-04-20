import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const features = [
  {
    title: 'Personality-Based Matching',
    description: 'Our algorithm analyzes your personality traits to recommend books that resonate with your unique character.',
  },
  {
    title: 'Reading Style Analysis',
    description: 'Discover your optimal reading environment and habits based on your cognitive preferences.',
  },
  {
    title: 'Adaptive Recommendations',
    description: 'Get increasingly personalized suggestions as our system learns from your reading patterns.',
  },
  {
    title: 'Community Insights',
    description: 'Connect with readers who share your personality profile and discover their favorite books.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Why Choose Arcmind?</h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Experience reading in a way that's tailored to your unique personality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 