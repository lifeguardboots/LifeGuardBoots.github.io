import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetailComponent } from './mapa-detail.component';

describe('MapaDetailComponent', () => {
  let component: MapaDetailComponent;
  let fixture: ComponentFixture<MapaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
