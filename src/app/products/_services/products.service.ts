import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetProductResponse } from '../_models/get-product.response';

export interface GetProductsRequest {
    search: string | null;
    limit: number;
    page: number;
    promo: boolean | null;
    active: boolean | null;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private readonly http: HttpClient) {}

    private productRequestParams$ = new BehaviorSubject<GetProductsRequest>({
        page: 1,
        active: null,
        promo: null,
        limit: 8,
        search: null
    });

    public getProductRequestParams$(): Observable<GetProductsRequest> {
        return this.productRequestParams$.asObservable();
    }

    public updateProductsRequestParams(params: Partial<GetProductsRequest>): void {
        this.productRequestParams$.next(
            {
                ...this.productRequestParams$.getValue(),
                ...params
            }
        );
    }

    public getProducts$(params: Partial<GetProductsRequest>): Observable<GetProductResponse> {
        return this.http.get<GetProductResponse>(`${environment.API_URL}/product${this.getProductsQuery(params)}`)
    }

    private getProductsQuery(params: Partial<GetProductsRequest>): string {
        let query = '?';

        Object.entries(params).forEach(([key, value]) => {
            if (value === null) {
                return;
            }
            query += `${key}=${value}&`;
        });

        return query;
    }
}
