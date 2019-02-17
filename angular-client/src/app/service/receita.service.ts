import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Receita } from '../receita';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(
    private http: HttpClient
  ) { }

  /** GET */
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>('api/receitas')
      .pipe(
        catchError(this.handleError('getReceitas', []))
      );
  }

  /** GET */
  getReceita(id: number): Observable<Receita> {
    return this.http.get<Receita>(`api/receita/${id}`)
      .pipe(
        catchError(this.handleError<Receita>(`getReceita id=${id}`))
      );
  }

  /** POST */
  addReceita(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(`api/receita`, receita, httpOptions)
      .pipe(
        catchError(this.handleError<Receita>('addReceita'))
      )
  }

  /** POST */
  saveIngredientes(receita: Receita): Observable<boolean> {
    return this.http.post<boolean>(`api/receita/${receita.id}/ingredientes`, receita.ingrediente, httpOptions)
      .pipe(
        catchError(this.handleError<boolean>('saveIngredientes'))
      )
  }

  /** POST */
  saveModoPreparo(receita: Receita): Observable<Boolean> {
    return this.http.post<boolean>(`api/receita/${receita.id}/modopreparo`, receita.modoPreparo, httpOptions)
      .pipe(
        catchError(this.handleError<boolean>('saveModoPreparo'))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
