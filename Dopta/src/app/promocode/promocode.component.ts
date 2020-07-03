import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Promotion} from '../models/promotion';
import {PromotionService} from '../services/promotion.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {

  promotion: Promotion = null;
  timeLeft: number = 10;
  interval;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private promotionService: PromotionService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.promotionService.getPromotionId(id).subscribe(
      promotion => {
        this.promotion = promotion;
      }
    );
  }
  generaCode() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMOPQRSTUVWYZ0123456789';
    const charactersLength = 6;
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * 33));
    }
    return result;
  }
  startTime() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
      }
    }, 10000);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
}
