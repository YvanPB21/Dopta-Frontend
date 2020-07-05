import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PromotionService} from '../../services/promotion.service';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.css']
})
export class PromotionDetailComponent implements OnInit {


  promotion: any;
  timeLeft: any = 20;
  interval;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private promotionService: PromotionService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.promotionService.getPromotionById(id).subscribe(
      promotion => {
        this.promotion = promotion;
      }
    );
  }
  generaCode(): any {
    let result = '';
    const characters = 'ABCDEFGHIJKLMOPQRSTUVWYZ0123456789';
    const charactersLength = 6;
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * 33));
    }
    return result;
  }
  startTime(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 20;
      }
    }, 10000);
  }
  pauseTimer(): void {
    clearInterval(this.interval);
  }

}
