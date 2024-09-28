import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../../models/listResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../../models/car';
import { SingleResponseModel } from '../../models/singleResponseModelt';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44322/api/Cars/";

  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "GetAll";
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getById(carId:number) : Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + "GetById?id=" + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
}
