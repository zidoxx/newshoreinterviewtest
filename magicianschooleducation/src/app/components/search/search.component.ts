import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  houses: string[] = [];

  constructor() {
    this.houses = [
      "All",
      "Gryffindor",
      "Slytherin",
      "Hufflepuff",
      "Ravenclaw"
    ]
   }

  ngOnInit(): void {
  }

}
