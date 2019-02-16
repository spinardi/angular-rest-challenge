import { Component, OnInit } from '@angular/core';
import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  receitas: Receita[] = [];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.receitaService.getReceitas()
      .subscribe(receitas => this.receitas = receitas.slice(0, 4));
  }

}
