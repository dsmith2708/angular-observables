import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
