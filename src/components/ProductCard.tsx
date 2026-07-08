import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card">
      <div className="relative overflow-hidden bg-muted h-64">
        <img
          src={product.image}
          alt={product.capacity}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardContent className="p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-3xl font-bold text-foreground">{product.capacity}</h3>
          <span className="text-2xl font-bold text-secondary">
            KES {product.price.toLocaleString()}
          </span>
        </div>
        <p className="text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground group/btn"
        >
          <Link to={`/product/${product.id}`}>
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
