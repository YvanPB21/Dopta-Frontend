import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SpecieService} from '../../services/specie.service';
import {SexService} from '../../services/sex.service';
import {SizeService} from '../../services/size.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output()filterSelected = new EventEmitter();
  sexes: any;
  sizes: any;
  species: any;
  sex = '';
  size = '';
  specie = '';
  search = '';
  constructor(private specieService: SpecieService, private sexService: SexService,
              private sizeService: SizeService) { }

  ngOnInit(): void {
    this.specieService.getSpecies().subscribe(
      species => {
        this.species = species;
        console.log(this.species);
      }
    );
    this.sexService.getSexes().subscribe(
      sexes => this.sexes = sexes
    );
    this.sizeService.getSizes().subscribe(
      sizes => {
        this.sizes = sizes;
      }
    );
  }
  sexSelected($event: any): void {
    this.sex = $event.value;
  }

  specieSelected($event: any): void {
    this.specie = $event.value;
  }

  sizeSelected($event: any): void {
    this.size = $event.value;
  }

  filter(): void {
    const filterObject = {sex: this.sex, specie: this.specie, size: this.size, search: this.search};
    this.filterSelected.emit(filterObject);
  }

  removeFilters(): void {
    this.sex = '';
    this.specie = '';
    this.size = '';
    this.search = '';
    this.filter();
  }
}
