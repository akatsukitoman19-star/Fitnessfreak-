export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPremium?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}
