import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcomponentComponent } from './boardcomponent.component';

describe('BoardcomponentComponent', () => {
  let component: BoardcomponentComponent;
  let fixture: ComponentFixture<BoardcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
