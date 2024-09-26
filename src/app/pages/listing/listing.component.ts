import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  img?: string,
  name: string,
  country: string,
  salary: number
}

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  users: User[] = [
    {
      img: 'https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg',
      name: "Ciny Maria",
      country: "Netherlands",
      salary: 6000
    },
    {
      img: 'https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg',
      name: "Muhammad Awais",
      country: "Pakistan",
      salary: 4000
    },
    {
      img: 'https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg',
      name: "John Doe",
      country: "United States",
      salary: 2000
    }
  ]
}
