import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceitasComponent } from './receitas/receitas.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceitaDetailComponent }  from './receita-detail/receita-detail.component';

const routes: Routes = [
  { path: 'receitas', component: ReceitasComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'receita/:id', component: ReceitaDetailComponent, },
  { path: 'criar', component: ReceitasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
