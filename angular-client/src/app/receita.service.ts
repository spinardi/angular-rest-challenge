import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Receita } from './receita';
import { RECEITAS } from './mock-receitas';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private messageService: MessageService) { }

  getReceitas(): Observable<Receita[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(RECEITAS);
  }
}
