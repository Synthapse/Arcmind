import React from 'react';
import { Button } from './ui/button';
import heroBg from '../assets/hero-bg4.jpg';

const Hero: React.FC = () => {
  const handleCreateProfile = () => {
    window.open('https://form.typeform.com/to/zufeXJvl', '_blank');
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
          <div className="flex flex-col w-full md:w-2/5">
              <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
                Discover Your Reading DNA
              </h1>
              <p className="text-xl text-foreground mb-8">
                Personalized reading recommendations based on your unique personality profile.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 mb-8 text-muted-foreground italic">
                "Arcmind's personality-based recommendations have completely transformed my reading journey. I'm discovering books I never would have found on my own."
              </blockquote>
              <Button size="lg" onClick={handleCreateProfile}>
                Create Your Profile
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative h-[600px] rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          </div>
    </section>
  );
};

export default Hero; 