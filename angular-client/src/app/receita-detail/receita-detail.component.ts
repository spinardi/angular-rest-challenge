import { Component, OnInit, Input } from '@angular/core';

import { Receita } from '../receita';

@Component({
  selector: 'app-receita-detail',
  templateUrl: './receita-detail.component.html',
  styleUrls: ['./receita-detail.component.css']
})
export class ReceitaDetailComponent implements OnInit {

  @Input() receita: Receita;

  constructor() { }

  ngOnInit() {
  }

}
