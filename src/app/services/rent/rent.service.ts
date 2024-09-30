import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../../models/listResponseModel';
import { SingleResponseModel } from '../../models/singleResponseModelt';
import { Rental } from '../../models/rental';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  apiUrl = "https://localhost:44322/api/Rentals/";

  constructor(private httpClient:HttpClient) { }

  getRentals() : Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "GetAll";
   return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getById(rentalId:number) : Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl + "GetById?id=" + rentalId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }

  checkCarAvailability(carId: number, rentDate: Date): Observable<SingleResponseModel<boolean>> {
    let newPath = `${this.apiUrl}CheckCarAvailability?carId=${carId}&rentDate=${rentDate}`;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  addRental(rental: Rental): Observable<SingleResponseModel<Rental>> {
    let newPath = this.apiUrl + "Add";
    return this.httpClient.post<SingleResponseModel<Rental>>(newPath, rental);
  }
  

}
