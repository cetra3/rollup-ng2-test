import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

interface Hero {
  id: number;
  name: string;
}

@Component({
    viewProviders: [HTTP_PROVIDERS],
    selector: 'my-app',
    styleUrls:[`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`],
    template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
  </div>
  `

})


export class AppComponent {
  constructor(http:Http) {
    http.get("heroes.json").subscribe(res => {
      this.heroes = res.json();
    });
  }
  public heroes;
  public title = 'Tour of Heroes';
  public selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
