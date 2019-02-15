import { Component, OnInit } from '@angular/core';

import { Receita } from '../receita';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receita: Receita = {
    id: 16,
    nome: 'Bolo de cenoura',
    calorias: 333,
    ingrediente: [
      '3 cenouras médias raspadas e picadas',
      '3 ovos',
      '1 xícara de óleo',
      '2 xícaras de açúcar',
      '2 xícaras de farinha de trigo',
      '1 colher (sopa) de fermento em pó',
      '1 pitada de sal'
    ],
    modoPreparo: 'Bater no liquidificador todos os ingredientes, ' +
      'acrescentando a farinha aos poucos'
  }

  constructor() { }

  ngOnInit() {
  }

}
