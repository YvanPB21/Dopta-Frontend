import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PromotionService} from '../../services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
@Input() promotion: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private promotionService: PromotionService) { }

  ngOnInit(): void {

  }

  view(id: any): void{
   this.router.navigate(['/promotion', id]);
  }
}
