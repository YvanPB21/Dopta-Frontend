import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizar-publicacion',
  templateUrl: './realizar-publicacion.component.html',
  styleUrls: ['./realizar-publicacion.component.css']
})
export class RealizarPublicacionComponent implements OnInit {
 sexes: string[] = ['Hembra', 'Macho', 'Otro'];
  sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];
  constructor() { }

  ngOnInit(): void {
  }

}
