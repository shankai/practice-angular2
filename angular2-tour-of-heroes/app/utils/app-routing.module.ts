import {NgModule} from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';

import {HeroesComponent} from '../components/heroes.component';
import {HeroDetailComponent} from '../components/hero-detail.component';
import {DashboardComponent} from '../components/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
