import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDetailComponent } from './historial-detail.component';

describe('HistorialDetailComponent', () => {
  let component: HistorialDetailComponent;
  let fixture: ComponentFixture<HistorialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
