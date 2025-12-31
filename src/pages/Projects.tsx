import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wind, Sun, Zap, TrendingUp, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'wind' | 'solar' | 'energy' | 'finance';

const projects = [
  {
    id: 1,
    title: 'San Severo Wind Farm',
    category: 'wind',
    location: 'Foggia, Apulia (Italy)',
    capacity: '54 MW',
    description: 'A major wind infrastructure project for RWE involving the installation of 12 high-capacity turbines to bolster the regional green energy grid.',
    image: 'wind',
    achievements: ['€92M Investment', '12 x 4.5 MW Turbines', 'Technical Synthesis & Scope'],
  },
  {
    id: 2,
    title: 'Castelluccio dei Sauri Wind Farm',
    category: 'wind',
    location: 'FG and Deliceto, Apulia (Italy)',
    capacity: '43.2 MW',
    description: 'Wind energy development for EDP Renewables featuring a nominal unit capacity of 3.6 MW per turbine under Wind Energy Castelluccio S.r.l.',
    image: 'wind',
    achievements: ['12 Wind Turbines', '3.6 MW Unit Capacity', 'Onshore Infrastructure'],
  },
  {
    id: 3,
    title: 'Ariano Irpino Wind Farm',
    category: 'wind',
    location: 'Avellino, Campania (Italy)',
    capacity: '84 MW',
    description: 'One of the largest wind farms in the Campania region, controlled by W.E.B. Energie AG, providing green energy for 57,000 households.',
    image: 'wind',
    achievements: ['20 Vestas V150 Turbines', 'Energized June 2024', '57,000 Households Powered'],
  },
  {
    id: 4,
    title: 'EDP Solar Italy XXIII',
    category: 'solar',
    location: 'Puglia, Italy',
    capacity: '64 MWp',
    description: 'Utility-scale photovoltaic installation by EDP Renewables producing approximately 90 GWh annually to meet the needs of 33,000 homes.',
    image: 'solar',
    achievements: ['90 GWh Annual Production', '33,000+ Homes Served', 'Solar PV Technology'],
  },
  {
    id: 5,
    title: 'Casalbore Piano Nicola',
    category: 'wind',
    location: 'Casalbore (AV), Italy',
    capacity: '15.3 MW',
    description: 'Wind energy plant for Ardian featuring Vestas V52 technology with 18 specialized turbine units generating over 25 million kWh per year.',
    image: 'wind',
    achievements: ['18 Vestas V52 WTGs', '25 GWh/year Production', 'Ardian Portfolio Asset'],
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
