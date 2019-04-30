import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludDetailComponent } from './salud-detail.component';

describe('SaludDetailComponent', () => {
  let component: SaludDetailComponent;
  let fixture: ComponentFixture<SaludDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
