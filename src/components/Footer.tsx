import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">TT</span>
              </div>
              <span className="text-2xl font-bold">Top Tank</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Kenya's trusted provider of premium water storage solutions. Quality and reliability since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#why-choose-us" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
<a href="tel:+254735809068" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +254 735 809 068
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@toptank.co.ke" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@toptank.co.ke
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Top Tank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
