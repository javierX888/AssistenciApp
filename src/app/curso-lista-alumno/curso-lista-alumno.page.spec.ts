import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosalumnoPage } from './cursosalumno.page';

describe('CursosalumnoPage', () => {
  let component: CursosalumnoPage;
  let fixture: ComponentFixture<CursosalumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
