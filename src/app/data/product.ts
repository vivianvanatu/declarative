/* Defines the product entity */
export interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  stock?: number;
}

export interface Result<T> {
  data: T | undefined;
  error?: string;
}
