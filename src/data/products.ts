export interface Product {
  id: string;
  capacity: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1000l",
    capacity: "1000L",
    price: 8400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Perfect for small households and residential use. Compact design with excellent durability and UV protection.",
    features: [
      "UV stabilized for longevity",
      "Food-grade polyethylene material",
      "Easy installation and maintenance",
      "5-year warranty",
      "Compact footprint"
    ]
  },
  {
    id: "1500l",
    capacity: "1500L",
    price: 12000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Ideal for medium-sized families. Enhanced capacity with robust construction for reliable water storage.",
    features: [
      "Superior UV protection",
      "Anti-bacterial interior lining",
      "Reinforced structure",
      "5-year warranty",
      "Weather-resistant exterior"
    ]
  },
  {
    id: "2000l",
    capacity: "2000L",
    price: 14800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Great for larger households and small commercial applications. Durable and long-lasting construction.",
    features: [
      "Heavy-duty construction",
      "Multi-layered protection",
      "Easy-access lid design",
      "7-year warranty",
      "Algae-resistant technology"
    ]
  },
  {
    id: "3000l",
    capacity: "3000L",
    price: 20800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Excellent choice for commercial use and large families. High capacity with premium quality materials.",
    features: [
      "Commercial-grade quality",
      "Advanced UV stabilization",
      "Reinforced base support",
      "7-year warranty",
      "Temperature-resistant design"
    ]
  },
  {
    id: "4000l",
    capacity: "4000L",
    price: 29400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "High-capacity solution for commercial properties and institutions. Built to last with superior engineering.",
    features: [
      "Industrial-strength construction",
      "Premium food-grade material",
      "Overflow prevention system",
      "10-year warranty",
      "Low-maintenance design"
    ]
  },
  {
    id: "4600l",
    capacity: "4600L",
    price: 32400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Perfect for medium-scale commercial operations. Optimized design for maximum water storage efficiency.",
    features: [
      "Enhanced structural integrity",
      "Multi-layered UV protection",
      "Sediment filtration system",
      "10-year warranty",
      "Easy cleaning access"
    ]
  },
  {
    id: "5000l",
    capacity: "5000L",
    price: 35400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Large capacity for demanding commercial needs. Superior quality with exceptional durability.",
    features: [
      "Maximum capacity design",
      "Triple-layer protection",
      "Seismic-resistant structure",
      "10-year warranty",
      "Professional installation support"
    ]
  },
  {
    id: "6000l",
    capacity: "6000L",
    price: 44400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Industrial-grade storage for large commercial facilities. Built to withstand harsh conditions.",
    features: [
      "Heavy-duty industrial design",
      "Advanced anti-bacterial coating",
      "Reinforced wall thickness",
      "12-year warranty",
      "Customizable fittings"
    ]
  },
  {
    id: "8000l",
    capacity: "8000L",
    price: 60800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Premium large-scale solution for industrial applications. Unmatched reliability and performance.",
    features: [
      "Industrial-grade materials",
      "Superior structural design",
      "Advanced overflow management",
      "12-year warranty",
      "Professional maintenance support"
    ]
  },
  {
    id: "10000l",
    capacity: "10000L",
    price: 78400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRtvQk-HLQ_ShOFDSrXwE9AbYLHsdQFjoZw&s",
    description: "Maximum capacity for large-scale industrial and commercial operations. The ultimate water storage solution.",
    features: [
      "Maximum capacity engineering",
      "Premium industrial-grade construction",
      "Advanced monitoring capabilities",
      "15-year warranty",
      "Dedicated support team"
    ]
  }
];
