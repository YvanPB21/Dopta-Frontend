import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RealizarPublicacionComponent} from './realizar-publicacion.component';

describe('RealizarPublicacionComponent', () => {
  let component: RealizarPublicacionComponent;
  let fixture: ComponentFixture<RealizarPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealizarPublicacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
