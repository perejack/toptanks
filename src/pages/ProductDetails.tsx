import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'd like to order the ${product.capacity} tank (KES ${product.price.toLocaleString()}).`;
window.open(`https://wa.me/254735809068?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+254735809068";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 group">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="animate-fade-in">
              <Card className="overflow-hidden border-border shadow-card">
                <img
                  src={product.image}
                  alt={product.capacity}
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>

            {/* Product Details */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl font-bold text-foreground mb-4">
                  {product.capacity} Water Tank
                </h1>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-secondary">
                    KES {product.price.toLocaleString()}
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-primary rounded-full" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Section */}
              <Card className="p-6 bg-muted border-border shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Order?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us now to place your order or get more information about this product.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button
                    onClick={handleWhatsAppOrder}
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white group"
                  >
                    <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Order via WhatsApp
                  </Button>
                  <Button
                    onClick={handlePhoneCall}
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground group"
                  >
                    <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Call +254 735 809 068
                  </Button>
                </div>
              </Card>

              {/* Additional Info */}
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Delivery Information</h3>
                <p className="text-muted-foreground text-sm">
                  Free delivery within Nairobi. Nationwide delivery available. Professional installation services offered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetails;
