import { Product } from './product.model';

export interface GetProductResponse {
    items: Array<Product>;
    itemCount: number;
    total: number;
    pageCount: number;
    next: string;
    previous: string;
}
