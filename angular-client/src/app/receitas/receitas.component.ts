import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas: Receita[];
  receita: Receita;
  url: string = 'disabled';

  constructor(
    private route: Router,
    private receitaService: ReceitaService
  ) { }

  ngOnInit() {
    this.url = this.route.url;

    if (this.url != '/criar') {
      this.getReceitas();
    }
    else {
      this.receita = new Receita;
    }
  }

  getReceitas(): void {
    this.receitaService.getReceitas()
      .subscribe(receitas => this.receitas = receitas);
  }

  addReceita(receita: Receita): void {

    /* TODO: validações */

    this.receitaService.addReceita(receita)
      .subscribe(receita => {this.receitas.push(receita)});
  }

}
