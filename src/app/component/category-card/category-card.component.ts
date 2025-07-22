import { Component, EventEmitter, Input, Output } from '@angular/core';
import Category from '../../models/Category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-card',
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Input() layout: 'list' | 'scroll' = 'list';

  @Output() selectedCategory = new EventEmitter<Category>();


  selectedCategoryHandler() {
    this.selectedCategory.emit(this.category);
  }

}
