import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersService } from 'src/app/services/characters.service';

import { InfocharactersComponent } from './infocharacters.component';
import { Character } from  '../../models/character';
 
describe('InfocharactersComponent', () => {
  let component: InfocharactersComponent;
  let fixture: ComponentFixture<InfocharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        CharactersService,
      ],
      declarations: [ InfocharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validate that the function getDataFromParent send only Character Data', ()=>{
    const character:Character[] = [{
      "name": "Harry Potter",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "31-07-1980",
      "yearOfBirth": 1980,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "black",
      "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
      },
      "patronus": "stag",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Daniel Radcliffe",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/harry.jpg"
    }]

    const test = component.getDataFromParent(character);
    const data = component.characters;
    expect(data).toBeDefined();
  })
});
