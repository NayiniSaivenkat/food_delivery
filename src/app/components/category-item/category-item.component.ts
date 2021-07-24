import { Component, Input } from '@angular/core';
import { category } from 'src/app/models/catogery.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
@Input() item: category;
}
