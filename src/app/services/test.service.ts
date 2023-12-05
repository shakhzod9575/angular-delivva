import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  // getAllProductsWithLimit(limit: number = 5) {
  //   const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
  //   return this.http.get<Array<ProductRepresentation>>(productUrl);
  // }

  // createProduct(product: ProductRepresentation) {
  //   const productUrl: string = `${this.baseUrl}products`;
  //   return this.http.post<ProductRepresentation>(productUrl, product);
  // }
}
