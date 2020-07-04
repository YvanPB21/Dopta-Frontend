import {Component, OnInit} from '@angular/core';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';
import {Specie} from '../../models/specie';
import {Size} from '../../models/size';
import {Sex} from '../../models/sex';
import {SpecieService} from '../../services/specie.service';

@Component({
  selector: 'app-realizar-publicacion',
  templateUrl: './realizar-publicacion.component.html',
  styleUrls: ['./realizar-publicacion.component.css']
})
export class RealizarPublicacionComponent implements OnInit {
  sexes: Sex[];
  sizes: Size[];
  species: Specie[];

  constructor(private specieService: SpecieService, private sexService: SexService, private sizeService: SizeService) {
  }

  ngOnInit(): void {

    this.specieService.getSpecies().subscribe(
      species => this.species = species
    );
    console.log(this.species);
    this.sexService.getSexes().subscribe(
      sexes => this.sexes = sexes
    );
    this.sizeService.getSizes().subscribe(
      sizes => {
        this.sizes = sizes;
      }
    );
  }

}
