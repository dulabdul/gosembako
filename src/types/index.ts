export interface ProductPrice {
  name: string;
  price: string;
}

export interface ProductGroup {
  groupName: string;
  items: ProductPrice[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  priceList: ProductGroup[];
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}