import { Component } from '@angular/core';
import { BasicLayoutComponent } from '../../shared/basic-layout/basic-layout.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [BasicLayoutComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {}
