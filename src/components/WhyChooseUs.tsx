import { Award, Shield, Truck, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified manufacturing with food-grade materials ensuring the highest standards."
    },
    {
      icon: Shield,
      title: "Long Warranty",
      description: "Up to 15-year warranty on select models. We stand behind our products."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Nationwide delivery and professional installation services available."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customer support team ready to assist you at every step."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Top Tank</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Kenya's most trusted water storage solutions provider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
