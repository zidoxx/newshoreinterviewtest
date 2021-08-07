import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let httpClientSpy: { get: jasmine.Spy } ;
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CharactersService,
      ]
    });
    service = new CharactersService(httpClientSpy as any);
  });

  it('Validate that the service its created', () => {
    expect(service).toBeTruthy();
  });

});
