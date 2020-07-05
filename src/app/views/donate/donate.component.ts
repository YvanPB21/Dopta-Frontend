import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  pick: string;
  paymentMethods: string[] = ['Visa', 'MasterCard', 'Banco Del Crédito del Perú', 'Scotiabank', 'Interbank', 'BBVA Continental'];
  constructor() { }

  ngOnInit(): void {
  }

}
