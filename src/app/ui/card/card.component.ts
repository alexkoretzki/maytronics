import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICardItem } from './interface/card.iterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: ICardItem;
  @Output() removeClick: EventEmitter<number> = new EventEmitter<number>();
  color: string = 'white';
  constructor() {}

  ngOnInit(): void {}
  colorChanged(e: any): void {
    this.color = e.target.value;
  }
  remove(id: number): void {
    this.removeClick.emit(id);
  }
}
