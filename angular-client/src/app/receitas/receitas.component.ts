import { Component, OnInit } from '@angular/core';

import { Receita } from '../receita';

/* TODO: capturar da base de dados via servidor */
import { RECEITAS } from '../mock-receitas';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas = RECEITAS;
  selectedReceita: Receita;

  constructor() { }

  ngOnInit() {
  }

  onSelect(receita: Receita): void {
    this.selectedReceita = receita;
  }

}
