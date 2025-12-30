import { Wind, Sun, Zap, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Wind,
    title: 'Wind Energy',
    description: 'End-to-end engineering solutions for onshore and offshore wind farms, from feasibility studies to commissioning and grid integration.',
    stats: '2.5+ GW',
    statsLabel: 'Installed Capacity',
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Comprehensive photovoltaic project development including site assessment, system design, and performance optimization.',
    stats: '1.8+ GW',
    statsLabel: 'Projects Supported',
  },
  {
    icon: Zap,
    title: 'Electrical Stations',
    description: 'Expert engineering for substations, grid connections, and power transmission infrastructure across Italy and Europe.',
    stats: '150+',
    statsLabel: 'Stations Completed',
  },
  {
    icon: TrendingUp,
    title: 'Financial Advisory',
    description: 'Strategic investment guidance, capital structuring, and due diligence services for renewable energy portfolios.',
    stats: '€5B+',
    statsLabel: 'Transactions Advised',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-medium mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Full-Spectrum Energy Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From initial concept to operational excellence, we deliver integrated engineering 
            and financial services that drive successful renewable energy projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to="/projects"
                className="group relative p-8 lg:p-10 rounded-3xl bg-secondary border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-border">
                  <span className="text-3xl font-bold text-primary">{service.stats}</span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    {service.statsLabel}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
