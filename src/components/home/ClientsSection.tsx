const clients = [
  { name: 'Siemens Gamesa', logo: 'SG' },
  { name: 'Terna', logo: 'TERNA' },
  { name: 'Enel', logo: 'ENEL' },
  { name: 'Siemens Energy', logo: 'SE' },
  { name: 'RWE', logo: 'RWE' },
  { name: 'Vestas', logo: 'VESTAS' },
  { name: 'Iberdrola', logo: 'IBER' },
  { name: 'Ørsted', logo: 'ØRSTED' },
];

const ClientsSection = () => {
  return (
    <section className="section-light py-20 lg:py-28 overflow-hidden">
      <div className="container-wide mb-12">
        <div className="text-center">
          <span className="text-primary font-medium mb-4 block">Trusted Partners</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Partnering with Industry Leaders
          </h2>
        </div>
      </div>

      {/* Scrolling Logo Carousel */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* Double the items for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="w-32 md:w-40 h-20 flex items-center justify-center rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <span className="text-lg md:text-xl font-bold text-foreground/40 tracking-wider">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
