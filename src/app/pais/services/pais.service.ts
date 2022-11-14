import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Country } from '../interfaces/pais.interface'
@Injectable({ providedIn: 'root' })
export class PaisService {
  private BASE_URL_V2: string = 'https://restcountries.com/v2'
  private get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'flag,name,capital,population,alpha2Code')
  }
  constructor(private http: HttpClient) { }
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.BASE_URL_V2}/name/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.BASE_URL_V2}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.BASE_URL_V2}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }
  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.BASE_URL_V2}/alpha/${id}`
    return this.http.get<Country>(url)
  }
}