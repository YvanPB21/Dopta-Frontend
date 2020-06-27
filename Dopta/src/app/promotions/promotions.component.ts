import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {PromotionService} from '../services/promotion.service';
import {Promotion} from '../models/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];
  sexes: string[] = ['Hembra', 'Macho'];
  species: string [] = ['Perro', 'Gato', 'Conejo'];
  promotions: Promotion[];
  searchToken: string;
  constructor(private promotionService: PromotionService) { }

  ngOnInit(){
    this.promotionService.getPromotions().subscribe(
      promotions => this.promotions = promotions
    );
  }
}
