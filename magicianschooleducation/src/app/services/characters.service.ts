import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService{

  //Inject the HttpClient to consume services
  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns and Observable with information of characters
   */
  getAllCharacters(): Observable<any>{
    //We use the environment route to get API URL
    const endpoint = environment.getAllCharacters;
    return this.http.get(endpoint);
  }

  /**
   * 
   * @returns and Observable with information of characters of the Book
   */
  getAllCharactersBook(): Observable<any>{
    const endpoint = environment.getAllCharactersBook;
    return this.http.get(endpoint);
  }

  /**
   * 
   * @returns and Observable with information of characters of the book
   */
  getAllStaffBook(): Observable<any>{
    const endpoint = environment.getAllStaffBook;
    return this.http.get(endpoint);
  }

  /**
   * 
   * @param house option for bring different house data example: gryffindor
   * brings all data for this house
   * @returns and Observable with information of the house selected
   */
  getAllHouseFindByHouse(house: string): Observable<any>{
    const endpoint = `${environment.getAllHouseFindByHouse}/${house}`;
    return this.http.get(endpoint);
  }
}
