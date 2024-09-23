import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../../models/listResponseModel';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44322/api/Customers/GetAll";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
