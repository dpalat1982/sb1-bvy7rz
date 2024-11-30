export interface ProductBrand {
  name: string;
  models: string[];
}

export interface Product {
  title: string;
  description: string;
  features: string[];
  brands: ProductBrand[];
  metaDescription: string;
  additionalInfo?: string;
}