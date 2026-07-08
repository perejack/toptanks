import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-toptank.jpg";

const About = () => {
  const highlights = [
    "Over 10 years of industry experience",
    "ISO certified manufacturing process",
    "100% food-grade materials",
    "Nationwide delivery & installation"
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
            <img
              src={aboutImage}
              alt="About Top Tank"
              className="relative rounded-2xl shadow-hover w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Top Tank</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Top Tank is Kenya's leading manufacturer of premium water storage solutions. 
              We've been providing reliable, durable, and high-quality water tanks to 
              residential, commercial, and industrial clients across the nation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us the 
              preferred choice for thousands of satisfied customers. Every tank is 
              manufactured using cutting-edge technology and the highest quality materials.
            </p>

            <div className="space-y-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
