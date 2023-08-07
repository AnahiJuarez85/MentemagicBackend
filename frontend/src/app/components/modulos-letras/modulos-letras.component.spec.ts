import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosLetrasComponent } from './modulos-letras.component';

describe('ModulosLetrasComponent', () => {
  let component: ModulosLetrasComponent;
  let fixture: ComponentFixture<ModulosLetrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulosLetrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
