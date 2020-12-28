import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarecomponentComponent } from './squarecomponent.component';

describe('SquarecomponentComponent', () => {
  let component: SquarecomponentComponent;
  let fixture: ComponentFixture<SquarecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquarecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
