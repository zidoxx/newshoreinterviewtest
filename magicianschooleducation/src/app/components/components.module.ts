import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { InfocharactersComponent } from './infocharacters/infocharacters.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    InfocharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    InfocharactersComponent
  ],
  providers: [],
})
export class ComponentsModule { }
