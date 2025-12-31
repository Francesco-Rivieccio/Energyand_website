import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, Sun, Zap, TrendingUp } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-dark overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for maximum text readability */}
        <div className="absolute inset-0 bg-[hsl(var(--surface-dark))]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--surface-dark))]/40 via-transparent to-[hsl(var(--surface-dark))]/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Engineering & Advisory
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up text-balance text-white drop-shadow-2xl"
            style={{ animationDelay: '0.2s', textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Engineering Growth.{' '}
            <span className="text-primary">Empowering Energy</span>{' '}
            Transition.
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up font-medium"
            style={{ animationDelay: '0.3s', textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            We combine engineering expertise with strategic advisory 
            to accelerate the global transition to renewable energy.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/projects">
              <Button variant="hero" size="xl" className="group">
                Explore Our Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero-outline" size="xl">
                About Energy&
              </Button>
            </Link>
          </div>

          {/* Service Icons */}
          <div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { icon: Wind, label: 'Wind Energy' },
              { icon: Sun, label: 'Solar Energy' },
              { icon: Zap, label: 'Electrical Stations' },
              { icon: TrendingUp, label: 'Advisory' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-surface-dark-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
