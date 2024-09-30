import { Component, Input } from '@angular/core';
import { RentService } from '../../services/rent/rent.service';
import { ToastrService } from 'ngx-toastr';
import { Rental } from '../../models/rental';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {
  @Input() carId: number;
  selectedRentDate: Date;
  selectedReturnDate: Date;

  constructor(private rentService: RentService, private toastrService: ToastrService) {}

  checkCarAvailability() {
    if (!this.selectedRentDate) {
      this.toastrService.error('Lütfen bir kiralama tarihi seçin.');
      return;
    }

    if (this.selectedReturnDate && this.selectedRentDate >= this.selectedReturnDate) {
      this.toastrService.error("Dönüş tarihi kiralama tarihinden önce olamaz.");
      return;
    }

    this.rentService
      .checkCarAvailability(this.carId, this.selectedRentDate)
      .subscribe(
        (response) => {
          if (response.data) {
            this.addRental(this.selectedRentDate, this.selectedReturnDate);
          }
        },
        (error) => {
          this.toastrService.error('Bu araç zaten kiralanmış');
        }
      );
  }

  addRental(rentDate: Date, returnDate: Date) {
    const rental: Rental = {
      carId: this.carId,
      customerId: 9, // Müşteri ID'si buradan alınmalı
      rentDate: rentDate,
      returnDate: returnDate
    };

    this.rentService.addRental(rental).subscribe(
      (response) => {
        this.toastrService.success("Araç başarıyla kiralandı.");
      },
      (error) => {
        this.toastrService.error("Kiralama işlemi başarısız oldu.");
      }
    );
  }
}
