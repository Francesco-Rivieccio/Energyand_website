import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Mail, Target, Award, Globe, Users } from 'lucide-react';

const team = [
    {
    name: 'Pio Carmelo Zelano',
    role: 'CEO',
    bio: 'Over 30 years of leadership in the renewable energy industry. Led some of the largest wind farm installations in Italy and has guided Energy& strategically for the past decade.',
    email: 'pc.zelano@energyand.com',
    linkedin: 'https://linkedin.com',
    initials: 'PZ',
  },
  {
    name: 'Filomena Botticella',
    role: 'Senior Architect',
    bio: 'Senior architect with 25+ years of experience in the design and construction of energy facilities. Expert in project planning, site operations, and technical coordination.',
    email: 'f.botticella@energyand.com',
    linkedin: 'https://linkedin.com',
    initials: 'FB',
  },
  {
    name: 'Michele Zelano',
    role: 'Business Developer',
    bio: 'Business developer with a decade of experience in the renewable energy sector. Specializes in project acquisition, client relations, and market expansion.',
    email: 'm.zelano@energyand.com',
    linkedin: 'https://linkedin.com',
    initials: 'MZ',
  },
  {
    name: 'Silvana Botticella',
    role: 'HSE Manager',
    bio: 'Oversees health, safety, and environmental aspects of all projects, ensuring compliance and best practices throughout the organization.',
    email: 's.botticella@energyand.com',
    linkedin: 'https://linkedin.com',
    initials: 'SB',
  },
  {
  name: 'Lucia Rivieccio',
  role: 'Senior Accountant & Financial Advisor',
  bio: 'Lucia brings a wealth of expertise in financial management and strategic advisory. She ensures robust fiscal oversight and provides key insights to support sustainable growth and investment decisions.',
  email: 'l.rivieccio@energyand.com',
  linkedin: 'https://linkedin.com',
  initials: 'LR',
  },
];

const values = [
  {
    icon: Target,
    title: 'Engineering Excellence',
    description: 'We bring precision, innovation, and decades of technical expertise to every project we undertake.',
  },
  {
    icon: Award,
    title: 'Advisory',
    description: 'Our unique combination of engineering and advisory sets us apart in the industry.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'With experience across 15+ countries, we understand the nuances of different energy markets.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, committed to your success from start to finish.',
  },
];

const achievements = [
  { value: '30+', label: 'Years of Experience' },
  { value: '4.3 GW', label: 'Capacity Supported' },
  { value: '€1.5B+', label: 'Investment Advised' },
  { value: '200+', label: 'Projects Delivered' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="section-light pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-primary font-medium mb-4 block">About Energy&</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Engineering the Future of{' '}
                <span className="text-gradient">Sustainable Energy</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                For over three decades, Energy& has been at the forefront of the renewable 
                energy revolution, combining world-class engineering expertise with strategic 
                financial advisory to deliver transformative projects.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-dark py-24 lg:py-32">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-bold text-surface-dark-foreground mb-6 max-w-3xl mx-auto">
                Empowering the Global Energy Transition
              </h2>
              <p className="text-surface-dark-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
                We believe that the transition to renewable energy is the defining challenge 
                of our time. Our mission is to accelerate this transition through 
                exceptional engineering and informed investment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-8 rounded-3xl bg-surface-dark-foreground/5 border border-surface-dark-foreground/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-surface-dark-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-surface-dark-foreground/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-light py-24 lg:py-32">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Our Team</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our leadership team brings together decades of experience in renewable 
                energy engineering, project development and advisory services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-dark py-24 lg:py-32" id="contact">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Our Impact</span>
              <h2 className="text-3xl md:text-5xl font-bold text-surface-dark-foreground mb-6">
                Delivering Results at Scale
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-8 rounded-3xl bg-surface-dark-foreground/5 border border-surface-dark-foreground/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                    {stat.value}
                  </div>
                  <p className="text-surface-dark-foreground/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-surface-dark-foreground mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-surface-dark-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Whether you have a project in mind or want to explore partnership opportunities, 
                we'd love to hear from you.
              </p>
              <a
                href="mailto:info@energy-and.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                info@energy-and.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
