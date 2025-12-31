import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 4.3, suffix: ' GW', label: 'Renewable Capacity Supported' },
  { value: 1.5, prefix: '€', suffix: 'B+', label: 'Investment Value Advised' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Countries Reached' },
];

const CountUp = ({ end, prefix = '', suffix = '', duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end * 10) / 10);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {prefix}{count % 1 === 0 ? count : count.toFixed(1)}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Driving the Energy Transition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over three decades of experience delivering measurable results 
            for renewable energy projects across Europe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-secondary/50 hover:bg-secondary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
