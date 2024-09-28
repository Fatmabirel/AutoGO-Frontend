import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { CarService } from '../../services/car/car.service';
import { BrandService } from '../../services/brand/brand.service';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';
import { FilterCarBrandPipe } from '../../pipes/filter-car-brand.pipe';
import { ColorService } from '../../services/color/color.service';
import { Color } from '../../models/color';
import { FilterCarColorPipe } from '../../pipes/filter-car-color.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    FormsModule,
    FilterCarBrandPipe,
    FilterCarColorPipe,
    RouterModule
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  isLoading: boolean = true;
  selectedBranch: string = '';
  selectedColor: string = '';

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
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
  onColorFilterChange(event: any) {
    const selectedColor = event.target.value;
  }
}
