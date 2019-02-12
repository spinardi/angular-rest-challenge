import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { MOCK_HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return MOCK_HEROES;
  }

}
