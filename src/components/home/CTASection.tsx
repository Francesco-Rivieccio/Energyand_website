import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6">
            Ready to Power Your{' '}
            <span className="text-gradient">Next Project?</span>
          </h2>
          <p className="text-surface-dark-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're developing a wind farm, planning a solar installation, 
            or seeking investment advisory, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about#contact">
              <Button variant="hero" size="xl" className="group">
                Start a Conversation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="hero-outline" 
                size="xl"
                className="border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-primary hover:text-primary"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
