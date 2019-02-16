import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Receita } from './receita';
import { RECEITAS } from './mock-receitas';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET */
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>('api/receitas')
      .pipe(
        tap(_ => this.log('fetched receitas')),
        catchError(this.handleError('getReceitas', []))
      );
  }

  /** GET */
  getReceita(id: number): Observable<Receita> {
    return this.http.get<Receita>(`api/receita/${id}`)
      .pipe(
        tap(_ => this.log(`fetched receita id=${id}`)),
        catchError(this.handleError<Receita>(`getReceita id=${id}`))
      );
  }

  /** POST */
  addReceita(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(`api/receita`, receita, httpOptions)
      .pipe(
        tap((newReceita: Receita) => this.log(`added receita w/ id=${newReceita.id}`)),
        catchError(this.handleError<Receita>('addReceita'))
      )
  }

  private log(message: string) {
    this.messageService.add(`ReceitaService: ${message}`);
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

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
