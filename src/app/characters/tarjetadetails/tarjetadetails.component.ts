import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-tarjetadetails',
  templateUrl: './tarjetadetails.component.html',
  styleUrls: ['./tarjetadetails.component.css'],
})
export class TarjetadetailsComponent implements OnInit {
  characters: any = null;
  id: any = null;

  constructor(
    private _route: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.charactersService
      .getById(this.id)
      .subscribe((result) => (this.characters = result));
  }

  deleteCharacter(): void {
    this.charactersService.delete(this.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tarjeta']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateStatus(status: string): void {
    const data = {
      id: this.characters.id,
      name: this.characters.name,
      status: status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      location: this.characters.location,
      image: this.characters.image,
    };

    this.charactersService.update(this.characters.id, data).subscribe(
      (response) => {
        this.characters.status = status;
        console.log(response);
        this.router.navigate(['/tarjetadetails']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
