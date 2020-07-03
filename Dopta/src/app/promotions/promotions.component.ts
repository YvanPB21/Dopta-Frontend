import {Component, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {PromotionService} from '../services/promotion.service';
import {Promotion} from '../models/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  promotions: Promotion[];
  searchToken: string;

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.promotionService.getPromotions().subscribe(
      promotions => {this.promotions = promotions;
      console.log(promotions)
      }
    );
  }
}
