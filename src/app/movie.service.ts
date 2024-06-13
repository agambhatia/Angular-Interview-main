import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Imovie, DB_URL} from './utils'
import { Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  fetchMovies(): Observable<Imovie[]> {
    return this.http.get<Imovie[]>(DB_URL).pipe(
      map(movies => movies.map(movie => ({
        ...movie,
        tags: movie.tags ? movie.tags : 'Unknown'
      }))),
      catchError((error) => {
        throw error.message;
      })
    )
  }

  deleteMovie(movieId: number): Observable<Imovie> {
    return this.http.delete<Imovie>(`${DB_URL}/${movieId}`);
  }
}
