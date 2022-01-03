import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'heroPardefaut',
  };
  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}

  public onSelect(hero: Hero) {
    this.hero = hero;
  }
}
