import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { CarService } from '../../services/car/car.service';
import { BrandService } from '../../services/brand/brand.service';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule,BasicLayoutComponent,FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  cars: Car[] = [];
  brands: Brand[] = [];
  isLoading: boolean = true;
  selectedBranch: string = '';

  constructor(
    private carService: CarService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  onBranchFilterChange(event: any) {
    const selectedBranch = event.target.value;
  }
}
