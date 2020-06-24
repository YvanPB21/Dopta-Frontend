import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
homeSlider = {items: 1, dots: true, nav: true};
  constructor() { }

  ngOnInit(): void {
  }

}
