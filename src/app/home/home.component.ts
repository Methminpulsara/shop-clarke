import { Component, OnInit } from '@angular/core';
import { CategoryCardComponent } from "../component/category-card/category-card.component";
import CategoryService from '../service/Category.service';
import Category from "../../models/Category";
import { CategoryListComponent } from "../category-list/category-list.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {

}
