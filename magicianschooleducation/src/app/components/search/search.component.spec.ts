import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersService } from 'src/app/services/characters.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let service: CharactersService;
  let component: SearchComponent;
  let miComponent: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        CharactersService,
      ],
      declarations: [ SearchComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    miComponent = new SearchComponent(service);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CharactersService);
    fixture.detectChanges();
  });

  it('Validate that the service getAllCharacters its created', () => {
    expect(service.getAllCharacters()).toBeTruthy();
  });

  it('Validata that the House Variable start with 5 items', ()=>{
    const data = miComponent.houses;
    expect(data.length).toEqual(5);
  })
  
});
