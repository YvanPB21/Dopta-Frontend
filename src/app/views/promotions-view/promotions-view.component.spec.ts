import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsViewComponent } from './promotions-view.component';

describe('PromotionsViewComponent', () => {
  let component: PromotionsViewComponent;
  let fixture: ComponentFixture<PromotionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
