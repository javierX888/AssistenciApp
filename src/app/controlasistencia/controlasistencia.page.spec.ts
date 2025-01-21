import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlasistenciaPage } from './controlasistencia.page';

describe('ControlasistenciaPage', () => {
  let component: ControlasistenciaPage;
  let fixture: ComponentFixture<ControlasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
