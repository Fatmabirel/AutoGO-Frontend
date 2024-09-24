import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';
import { Router, RouterModule } from '@angular/router';
import { SliderComponent } from '../../shared/slider/slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faCar, // Araçlarımız için ikon
  faBuilding, // Şubelerimiz için ikon
  faQuestionCircle,
  faSmile, // Müşteri Memnuniyeti için
  faLeaf, // Sürdürülebilirlik için
  faShieldAlt, // Güvenilirlik için
  faLightbulb, // Yenilikçilik için
  faStar, // Kalite için
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'], // 'styleUrl' yerine 'styleUrls' kullanmalısınız

  imports: [
    CommonModule,
    BasicLayoutComponent,
    RouterModule,
    SliderComponent,
    FontAwesomeModule,
  ],
})
export class HomePageComponent implements OnInit {
  icon = faCalendar; // Online Rezervasyon ikonu
  buildingIcon = faBuilding; // Şubelerimiz için ikon
  icon3 = faQuestionCircle; // Sıkça Sorulan Sorular ikonu
  carIcon = faCar; // Araçlarımız için ikon
  smileIcon = faSmile; 
  leafIcon = faLeaf; 
  shieldIcon = faShieldAlt; 
  lightbulbIcon = faLightbulb; 
  starIcon = faStar; 
  isLoggedIn: boolean = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Token varsa true, yoksa false
  }
}
