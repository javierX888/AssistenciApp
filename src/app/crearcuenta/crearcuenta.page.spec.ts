import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearcuentaPage } from './crearcuenta.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrearcuentaPage', () => {
  let component: CrearcuentaPage;
  let fixture: ComponentFixture<CrearcuentaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearcuentaPage, RouterTestingModule ] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(CrearcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
