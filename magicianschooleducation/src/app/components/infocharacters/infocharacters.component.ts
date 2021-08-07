import { Component, Input} from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-infocharacters',
  templateUrl: './infocharacters.component.html',
  styleUrls: ['./infocharacters.component.scss']
})
export class InfocharactersComponent{

  //Variable to store all the data received from the parent component
  @Input() characters: Character[] = [];

  constructor() { }

  //Function to retrieve data from the search component
  getDataFromParent(event: Character[]){
    //Receive the data and save in the variable characters to use in the html
    this.characters = event;
  }

}
