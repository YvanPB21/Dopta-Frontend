import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../services/promotion.service';

@Component({
  selector: 'app-promotions-view',
  templateUrl: './promotions-view.component.html',
  styleUrls: ['./promotions-view.component.css']
})
export class PromotionsViewComponent implements OnInit {
  promotions: any;
  constructor(private promotionService: PromotionService) {
  }

  ngOnInit(): void {
    this.promotionService.getPromotions().subscribe(
      promotions => {
        this.promotions = promotions;
      }
    );
  }
}
