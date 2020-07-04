import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../services/promotion.service';
import {Promotion} from '../models/promotion';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions: Promotion[];
  searchToken: string;
  constructor(private promotionService: PromotionService, private router: Router) {
  }
  ngOnInit() {
    this.promotionService.getPromotions().subscribe(
      promotions => {this.promotions = promotions;
                     console.log(promotions); }
      );
  }
  view(id){
    console.log(id);
    this.router.navigate(['promocode/', id]);
  }
}
