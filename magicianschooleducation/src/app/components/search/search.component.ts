import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //this variable send data to the parent component
  @Output() dataEvent = new EventEmitter<Character[]>();

  //Variable to store the data, later send to the infocharacters component to show character information
  data:Character[] = [];

  //Variable to store the options for the houses
  houses: any[] = [];

  //Variable binding for ngModel to capture the house selected
  houseSelected: string = 'all';

  //Variable to show message
  message: boolean = false;

  //Inject the created service to use the different functions and return data
  constructor(private characterService: CharactersService) {

    //Initialize the variable with the houses options
    this.houses = [
      { name: "All" , value: "all" },
      { name: "Gryffindor", value: "gryffindor" },
      { name: "Slytherin" , value: "slytherin" },
      { name: "Hufflepuff" , value: "hufflepuff" },
      { name: "Ravenclaw" , value: "ravenclaw" }
    ]

   }

  ngOnInit(): void {
    //Call the service to fill the initial data
    this.getAllCharacters();
  }

  //Service to get all the characters
  getAllCharacters():any {
    //this clean the data variable to receive the new information from services
    this.data = [];
    //This service get all the characters information
    this.characterService.getAllCharacters().subscribe((res:Character[])=>{
      //Save the information in the data information to used in the component
      this.data = res;
      //Emit the info to use in the child component
      this.dataEvent.emit(this.data);
    })
  }

  /**
   * Service to get all the info for house
   * @param house this parameter is used to sent the payload to receive data from this house
   */
  getAllHouseFindByHouse(house:string){
    //this clean the data variable to receive the new information from services
    this.data = [];
    //Call the service and return the data searched by the house selected
    this.characterService.getAllHouseFindByHouse(house).subscribe((res:Character[])=>{
      //Save the information in the data information to used in the component
      this.data = res;
      //Emit the info to use in the child component
      this.dataEvent.emit(this.data);
    })
  }

  /**
   * This functions is send always that the person click in the checkbox and return data depends on the house selected
   * if all is clicked this send all characters data
   * @param house
   */
  getData(house:string){
    //Variable used to select a house, if is selected 'all' this brings all the data of characters
    house == 'all' ? this.getAllCharacters() : this.getAllHouseFindByHouse(house);
  }

  /**
   * Function to filter by property
   * @param query this receive the name or lastname, if you changes the property you can filter by another string
   * @returns the data filtered with the query written
   */
  filterCharacter(query:string){
    //Change this property to find by another way
    const property = 'name';
    //Return the array with the filter properties
    return this.data.filter((character:any) =>
    character[property]?.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  /**
   * This function is exectuted when the user push any key
   * this emit the result of the search query to the child component
   * @param event Capture the event, in this case the keyup pushed
   */
  searchCharacter(event:any){
    //Capture the event, in this case every letter o number pressed
    let name = event.target.value;

    //This validate if the variable is empty o not
    if(name == ''){
      //If name is empty return the original data to fill the characters
      this.dataEvent.emit(this.data);
      //Change this variable to hide the info message
      this.message = false;
    }else{
      //If name have a letter call the function and filter, return just the coincidenses
      let test = this.filterCharacter(name);

      //This validate if the filter return data
      if(test.length == 0){
        //Change this variable to show a info message that no members are filtered
        this.message = true;
        //Emit the empty data to avoid errors
        this.dataEvent.emit(test);
      }else{
        //Change this variable to hide the info message
        this.message = false;
        //Emit the result of the filter data
        this.dataEvent.emit(test);
      }
    }
  }
}
