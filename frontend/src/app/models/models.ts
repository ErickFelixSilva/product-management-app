export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  category: Category;
}
  
export interface Category {
  id: number;
  name: string;
  parentCategoryId?: number;
  subCategories?: Category[];
}