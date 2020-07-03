import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../models/pet';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  pet: Pet = null;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private petService: PetService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.petService.getPet(id).subscribe(
        pet => {
          this.pet = pet;
        }
    );
  }

}
