import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';
import { Car } from '../../models/car';
import { CarService } from '../../services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RentalComponent } from "../rental/rental.component";

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, BasicLayoutComponent, FormsModule, RentalComponent],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css',
})
export class CarDetailComponent implements OnInit {
  car: Car;
  carId: number;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.carId = Number(params.get('carId'));
      if (this.carId) {
        this.getCarById(this.carId);
      }
    });
  }

  getCarById(carId: number) {
    this.carService.getById(carId).subscribe((response) => {
      this.car = response.data;
    });
  }
}