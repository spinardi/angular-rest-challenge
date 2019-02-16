import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Receita } from './receita';
import { RECEITAS } from './mock-receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor() { }

  getReceitas(): Observable<Receita[]> {
    return of(RECEITAS);
  }
}
