import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand/brand.service';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule,BasicLayoutComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
   this.getBrands();
  }
  getBrands(): void { 
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data; 
      this.groupBrands();
    });
  }
  groupedBrands: { [key: string]: Brand[] } = {};

  groupBrands() {
    this.groupedBrands = {};
    this.brands.sort((a, b) => a.name.localeCompare(b.name, 'tr-TR')).forEach(branch => {
      const firstLetter = branch.name.charAt(0).toUpperCase();
      if (!this.groupedBrands[firstLetter]) {
        this.groupedBrands[firstLetter] = [];
      }
      this.groupedBrands[firstLetter].push(branch);
    });
  }

  groupedKeys(): string[] {
    return Object.keys(this.groupedBrands).sort((a, b) => a.localeCompare(b, 'tr'));
  }
}
