import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Brand } from '../../models/brand';
import { ResponseModel } from '../../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44322/api/Brands/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'GetAll';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Add';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
}
