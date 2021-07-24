import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from '../models/catogery.model';
import { Food } from '../models/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories:category[] = [];
  foods: Food[] = [];
  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.foods=this.foodService.getFoods()
  }
  getCategories(){
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: '../../assets/icons/cat1.jpg',
        active: true,
      },
      {
        id: 2,
        label: 'Pizzas',
        image: '../../assets/icons/cat4.jpg',
        active: false,
      },
      {
        id: 3,
        label: 'Burgers',
        image: '../../assets/icons/cat2.jpg',
        active: false,
      },
      {
        id: 4,
        label: 'Dishes',
        image: '../../assets/icons/cat3.png',
        active: false,
      }
      

      
    ]
  }
  goToDetailPage(id: string) {
    this.router.navigate(['detail',id]);
  }
}
