import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFound } from './page404.page';

describe('PageNotFound', () => {
  let component: PageNotFound;
  let fixture: ComponentFixture<PageNotFound>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});