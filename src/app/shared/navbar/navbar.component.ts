import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;

  ngOnInit(): void {
   const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Token varsa true, yoksa false
    console.log(this.isLoggedIn);
  }

}
