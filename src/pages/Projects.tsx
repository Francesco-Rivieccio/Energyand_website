import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wind, Sun, Zap, TrendingUp, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'wind' | 'solar' | 'energy' | 'finance';

const projects = [
  {
    id: 1,
    title: 'Sardinia Wind Complex',
    category: 'wind',
    location: 'Sardinia, Italy',
    capacity: '450 MW',
    description: 'Led the engineering design and grid integration for one of Italy\'s largest onshore wind installations, featuring 120 turbines across multiple sites.',
    image: 'wind',
    achievements: ['Full EPC support', 'Grid connection optimization', '98.5% availability achieved'],
  },
  {
    id: 2,
    title: 'Puglia Solar Park',
    category: 'solar',
    location: 'Apulia, Italy',
    capacity: '280 MW',
    description: 'Comprehensive technical advisory for a utility-scale photovoltaic installation, from site selection through commissioning.',
    image: 'solar',
    achievements: ['Bifacial module optimization', '25-year performance modeling', 'Battery storage integration'],
  },
  {
    id: 3,
    title: 'European Renewables Fund II',
    category: 'finance',
    location: 'Pan-European',
    capacity: '€1.2B AUM',
    description: 'Strategic advisory for a major infrastructure fund\'s renewable energy portfolio, covering due diligence and asset valuation across 15 countries.',
    image: 'finance',
    achievements: ['Portfolio optimization', 'M&A advisory', 'Risk assessment frameworks'],
  },
  {
    id: 4,
    title: 'Adriatic Substation Network',
    category: 'energy',
    location: 'Eastern Italy',
    capacity: '12 Stations',
    description: 'Design and commissioning support for a network of high-voltage substations connecting renewable generation to the national grid.',
    image: 'energy',
    achievements: ['380kV transmission integration', 'SCADA system design', 'Compliance with TSO requirements'],
  },
  {
    id: 5,
    title: 'Nordic Wind Acquisition',
    category: 'finance',
    location: 'Scandinavia',
    capacity: '€800M',
    description: 'Financial advisory for the acquisition of a 650 MW operational wind portfolio, including valuation, negotiation support, and deal structuring.',
    image: 'finance',
    achievements: ['Transaction structuring', 'Seller due diligence', 'Post-acquisition integration'],
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'wind', label: 'Wind', icon: Wind },
  { id: 'solar', label: 'Solar', icon: Sun },
  { id: 'energy', label: 'Energy', icon: Zap },
  { id: 'finance', label: 'Finance', icon: TrendingUp },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'wind': return Wind;
    case 'solar': return Sun;
    case 'energy': return Zap;
    case 'finance': return TrendingUp;
    default: return Zap;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'wind': return 'bg-blue-500/10 text-blue-500';
    case 'solar': return 'bg-amber-500/10 text-amber-500';
    case 'energy': return 'bg-purple-500/10 text-purple-500';
    case 'finance': return 'bg-primary/10 text-primary';
    default: return 'bg-primary/10 text-primary';
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="section-light pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-primary font-medium mb-4 block">Our Portfolio</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Proven Excellence Across{' '}
                <span className="text-gradient">Energy Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From multi-gigawatt wind installations to billion-euro investment transactions, 
                explore our track record of delivering exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="section-light pb-8">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? 'default' : 'secondary'}
                    onClick={() => setActiveCategory(cat.id as Category)}
                    className="gap-2"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-light pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <article
                    key={project.id}
                    className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon className="w-24 h-24 text-primary/20" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                          <CategoryIcon className="w-3.5 h-3.5" />
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      
                      <div className="text-primary font-bold text-lg mb-4">
                        {project.capacity}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
