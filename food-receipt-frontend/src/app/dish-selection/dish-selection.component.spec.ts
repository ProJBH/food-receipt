import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishSelectionComponent } from './dish-selection.component';

describe('DishSelectionComponent', () => {
  let component: DishSelectionComponent;
  let fixture: ComponentFixture<DishSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
