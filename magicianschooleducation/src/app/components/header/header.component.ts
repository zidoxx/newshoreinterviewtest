import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Title for the app
  title: string = 'Magician School Education';

  constructor() { }

  ngOnInit(): void {
  }

}
