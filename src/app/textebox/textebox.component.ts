import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISearchResult } from './interface/data.interface';

@Component({
  selector: 'app-textebox',
  templateUrl: './textebox.component.html',
  styleUrls: ['./textebox.component.scss'],
})
export class TexteboxComponent implements OnInit {
  isOpen = false;
  @Input() searchResults: ISearchResult[] = [];
  @Output() onSearchApplied: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemClick: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  keyupEvnt(e: any): void {
    this.isOpen = true;
    this.onSearchApplied.emit(e.target.value);
  }
  onFocus(e: any): void {
    this.isOpen = true;
    this.onSearchApplied.emit(e.target.value);
  }
  itemSelected(id: number) {
    this.isOpen = false;
    this.itemClick.emit(id);
  }
}
