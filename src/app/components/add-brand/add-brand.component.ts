import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrandService } from '../../services/brand/brand.service';
import { ToastrService } from 'ngx-toastr';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  standalone: true,
  imports: [BasicLayoutComponent, ReactiveFormsModule],
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.css',
})
export class AddBrandComponent implements OnInit {
  brandAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['/brands']);
        },
        (responseError) => {
          console.log(responseError);
          if (responseError.error && responseError.error.errors) {
            for (const key in responseError.error.errors) {
              if (responseError.error.errors.hasOwnProperty(key)) {
                responseError.error.errors[key].forEach((errorMessage: string) => {
                  this.toastrService.error(errorMessage, 'Doğrulama Hatası');
                });
              }
            }
          } else {
            this.toastrService.error('Beklenmeyen bir hata oluştu.', 'Hata');
          }
        }
      );
    } else {
      this.toastrService.error('Lütfen eksik alanları doldurunuz!', 'Hata');
    }
  }
}
