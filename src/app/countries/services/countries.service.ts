import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of} from 'rxjs';
import { Country, Maps } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string='https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  private getCountriespRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(//*pipe recibe operadores de rjx
      catchError(error=>of([])),//*en esta linea de codigo devuelve un observable de arreglos vacios
      //*delay(2000)=nos aayudara ah que cuando se busque el pais haya un tiempo de espera de 2 segundos para luego mostrar la informacion del pais
    );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url=`${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries=>countries.length>0? countries[0]:null),
      catchError(error=>of(null))//*en esta linea de codigo devuelve un observable de arreglos vacios
    );
  }

  searchCapital(term:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${term}`;
    return this.getCountriespRequest(url);

  }

  searchCountry(term:string):Observable<Country[]>{
      const url=`${this.apiUrl}/name/${term}`;
      return this.getCountriespRequest(url);
  }
  searchRegion(term:string):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${term}`;
    return this.getCountriespRequest(url);
  }
}
