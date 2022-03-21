import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../models/personaje.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  personaje: Personaje = {};

  submitted = false;

  constructor(private charactersService: CharactersService, private router: Router) {}

  ngOnInit(): void {}

  saveCharacter(): void {
    const data = {
      id: this.personaje.id,
      name: this.personaje.name,
      status: 'Alive',
      species: 'null',
      gender: 'null',
      origin: 'null',
      location: 'null',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };

    this.charactersService.add(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/tarjeta']);
      },
      error => {
        console.log(error);
      }
    );
  }

  newCharacter(): void {
    this.submitted = false;
    this.personaje = {
      id: 0,
      name: ''
    };
  }
}
