import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receita-ingrediente',
  templateUrl: './receita-ingrediente.component.html',
  styleUrls: ['./receita-ingrediente.component.css']
})
export class ReceitaIngredienteComponent {

  @Input() ingredientes: Array<string>;
  @Output() ingredienteEvent: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  descricao: string;

  @Input() isIngredientesSaved: boolean;

  constructor() { }

  saveIngredientes(): void {
    if (this.descricao === null || this.descricao === undefined) {
      return;
    }

    if (this.descricao.trim().length) {
      this.ingredientes.push(this.descricao);
      this.ingredienteEvent.emit(this.ingredientes);
    }

    this.descricao = "";
  }
}
