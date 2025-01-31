import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsumoAPIService } from './consumo-api.service';

describe('ConsumoAPIService', () => {
  let service: ConsumoAPIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsumoAPIService]
    });
    service = TestBed.inject(ConsumoAPIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

 afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call /login when loginApi is called', () => {
    service.loginApi('docente', 'password1').subscribe(resp => {
      expect(resp).toBeDefined();
    });

    const req = httpMock.expectOne(service['baseUrl'] + '/login');
    expect(req.request.method).toBe('POST');
    req.flush({ message: 'OK' });
  });
});
