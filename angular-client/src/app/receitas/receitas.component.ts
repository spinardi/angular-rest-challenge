import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

import { Receita } from '../receita';
import { ReceitaService } from '../service/receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas: Receita[];
  receita: Receita;
  url: string = 'disabled';
  isReceitaCreated: boolean = false;
  isIngredientesSaved: boolean = false;

  constructor(
    private route: Router,
    private receitaService: ReceitaService
  ) { }

  ngOnInit() {
    this.url = this.route.url;

    this.getReceitas();
    if (this.url === '/criar') {
      this.receita = new Receita();
    }

    this.isReceitaCreated = false;
    this.isIngredientesSaved = false;
  }

  getReceitas(): void {
    this.receitaService.getReceitas()
      .subscribe(receitas => this.receitas = receitas);
  }

  addReceita(): void {
    if (this.receita.nome === null || this.receita.nome === undefined) {
      return;
    }

    if (!this.receita.nome.trim().length) {
      this.receita.nome = "";
      return;
    }

    if (this.receita.calorias === null || this.receita.calorias === undefined) {
      return;
    }

    if (this.receita.porcoes === null || this.receita.porcoes === undefined) {
      return;
    }

    this.receitaService.addReceita(this.receita)
      .subscribe(receita => {
        this.receita.ingrediente = new Array<string>();
        this.receita.id = receita.id;
        this.receitas.push(receita);
        this.isReceitaCreated = true;
      });
  }

  saveIngredientes(): void {
    this.receitaService.saveIngredientes(this.receita)
      .subscribe(saved => {
        if (saved) {
          this.isIngredientesSaved = true;
        }
      });
  }

  saveModoPreparo(): void {
    if (this.receita.modoPreparo === null || this.receita.modoPreparo === undefined) {
      return;
    }

    if (!this.receita.modoPreparo.trim().length) {
      this.receita.modoPreparo = "";
      return;
    }

    this.receitaService.saveModoPreparo(this.receita)
    .subscribe(saved => {
      if (saved) {
        this.route.navigate([`receita/${this.receita.id}`]);
      }
    });
  }

}
