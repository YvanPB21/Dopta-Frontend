import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {
  pick: string;
  paymentMethods: string[] = ['Visa', 'MasterCard', 'Banco Del Crédito del Perú', 'Scotiabank', 'Interbank', 'BBVA Continental'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
