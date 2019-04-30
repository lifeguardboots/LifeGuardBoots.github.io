import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasDetailComponent } from './alertas-detail.component';

describe('AlertasDetailComponent', () => {
  let component: AlertasDetailComponent;
  let fixture: ComponentFixture<AlertasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
