import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[BackgroundColor]',
})
export class BackgroundColorDirective implements OnChanges {
  @Input() inputColor: string;
  constructor(private elRef: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputColor) {
      this.changeColor();
    }
  }

  private changeColor(): void {
    this.elRef.nativeElement.style.backgroundColor = this.inputColor;
  }
}
