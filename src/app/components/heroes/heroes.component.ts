import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HEROES } from '../../mock-data/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
