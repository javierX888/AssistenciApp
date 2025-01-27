import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosprofesorPage } from './cursosprofesor.page';

describe('CursosprofesorPage', () => {
  let component: CursosprofesorPage;
  let fixture: ComponentFixture<CursosprofesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
