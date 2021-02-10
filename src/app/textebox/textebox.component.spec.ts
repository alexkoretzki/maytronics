import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteboxComponent } from './textebox.component';

describe('TexteboxComponent', () => {
  let component: TexteboxComponent;
  let fixture: ComponentFixture<TexteboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexteboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
