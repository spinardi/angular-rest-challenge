import { Component, OnInit } from '@angular/core';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas: Receita[];
  selectedReceita: Receita;

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getReceitas();
  }

  onSelect(receita: Receita): void {
    this.selectedReceita = receita;
  }

  getReceitas(): void {
    this.receitaService.getReceitas()
      .subscribe(receitas => this.receitas = receitas);
  }

}
