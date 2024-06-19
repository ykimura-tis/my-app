import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './apicaller2';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests.
  });

  it('should get data from API', () => {
    const mockData = { data: 'data' };

    service.callApi('http://example.com').subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://example.com');
    expect(req.request.method).toBe('GET');
    req.flush(mockData); // Provide mock data as the response.
  });
});