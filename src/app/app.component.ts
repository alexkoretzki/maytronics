import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { IUser } from './interfaces/user.interface';
import { SearchService } from './services/search.service';
import { ISearchResult } from './textebox/interface/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'maytronics';
  searchResults: ISearchResult[] = [];
  cardsData: IUser[] = [];
  constructor(private searchService: SearchService) {}

  filterResults(term: string): void {
    this.searchResults = this.searchService
      .filterResults(term)
      .map((result) => {
        return {
          id: result.id,
          data: result.title,
        };
      });
  }
  onItemSelected(id: number) {
    const item = this.searchService.getItem(id);
    this.cardsData.push(item);
  }
  removeItem(id: number) {
    this.cardsData = this.cardsData.filter((item) => item.id !== id);
  }
}
