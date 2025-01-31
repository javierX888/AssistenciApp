import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosprofesorPage } from './curso-lista-profesor.page';
import { ConsumoAPIService } from '../services/consumo-api.service';
import { of } from 'rxjs';

describe('CursosprofesorPage', () => {
  let component: CursosprofesorPage;
  let fixture: ComponentFixture<CursosprofesorPage>;
  let mockApi: jasmine.SpyObj<ConsumoAPIService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('ConsumoAPIService', ['getCursosProfesor']);
    mockApi.getCursosProfesor.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [CursosprofesorPage],  // es standalone
      providers: [
        { provide: ConsumoAPIService, useValue: mockApi }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses from API on init', () => {
    // Simulamos un array de cursos
    const mockCursos = [{ id:1, nombre:'Matemáticas' }];
    mockApi.getCursosProfesor.and.returnValue(of(mockCursos));

    component.ngOnInit(); // vuelve a llamar
    expect(mockApi.getCursosProfesor).toHaveBeenCalledWith(component.profesorId);
    expect(component.cursos).toEqual(mockCursos);
  });
});
