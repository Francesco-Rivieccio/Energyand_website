import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark py-16 lg:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E&</span>
              </div>
              <span className="font-semibold text-xl text-surface-dark-foreground">Energy&</span>
            </Link>
            <p className="text-surface-dark-foreground/70 max-w-md leading-relaxed">
              Engineering excellence meets financial sophistication. We power the global energy transition through innovative solutions and strategic advisory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-surface-dark-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-surface-dark-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-surface-dark-foreground/70">
                  Milan, Italy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@energyand.com"
                  className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                >
                  info@energyand.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-surface-dark-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-surface-dark-foreground/50 text-sm">
              © {new Date().getFullYear()} Energy&. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground/80 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
