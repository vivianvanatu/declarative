import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './data/product';
import { ProductData } from './data/data';


export class AppData implements InMemoryDbService {

  createDb(): { products: Product[] } {
    const products = ProductData.products;
    return { products };
  }
}
