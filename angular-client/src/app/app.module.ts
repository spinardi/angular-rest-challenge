import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { MessagesComponent }    from './messages/messages.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    ReceitasComponent,
    ReceitaDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
