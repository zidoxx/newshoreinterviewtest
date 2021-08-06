import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Options in Select must be equal to Array', () => {
    let searchComponent = new SearchComponent();
    const options = searchComponent.houses;
    const houses = [
      "All",
      "Gryffindor",
      "Slytherin",
      "Hufflepuff",
      "Ravenclaw"
    ];
    expect(options).toEqual(houses);
  });
});
