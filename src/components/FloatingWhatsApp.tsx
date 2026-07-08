import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
window.open("https://wa.me/254735809068?text=Hello! I'm interested in your water tanks.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-hover bg-[#25D366] hover:bg-[#20BD5A] text-white p-0 group animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingWhatsApp;
