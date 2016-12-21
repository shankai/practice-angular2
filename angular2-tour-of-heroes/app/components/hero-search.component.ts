import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {HeroSearchService} from '../services/hero-search.service';
import {Hero} from '../utils/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private router: Router,
              private heroSearchService: HeroSearchService) {
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
        term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([])
      ).catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }

}
