import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarmapaComponent } from './mostrarmapa.component';

describe('MostrarmapaComponent', () => {
  let component: MostrarmapaComponent;
  let fixture: ComponentFixture<MostrarmapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarmapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarmapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
