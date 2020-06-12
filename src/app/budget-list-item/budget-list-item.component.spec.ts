import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListItemComponent } from './budget-list-item.component';

describe('BudgetListItemComponent', () => {
  let component: BudgetListItemComponent;
  let fixture: ComponentFixture<BudgetListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
