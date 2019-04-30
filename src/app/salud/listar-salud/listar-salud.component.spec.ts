import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSaludComponent } from './listar-salud.component';

describe('ListarSaludComponent', () => {
  let component: ListarSaludComponent;
  let fixture: ComponentFixture<ListarSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
