import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import {AppComponent}  from './components/app.component';
import {HeroesComponent} from './components/heroes.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {DashboardComponent} from './components/dashboard.component';
import {HeroSearchComponent} from './components/hero-search.component';

import {HeroService} from './services/hero.service';
import {HeroSearchService} from './services/hero-search.service';

import {AppRoutingModule} from './utils/app-routing.module';

import './utils/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
