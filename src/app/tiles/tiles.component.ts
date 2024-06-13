import { Component, OnInit } from '@angular/core';
import { Imovie } from '../utils';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoModalComponent } from '../info-modal/info-modal.component';

declare var bootstrap: any;

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoModalComponent],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent implements OnInit {

  
  constructor (private movieService: MovieService) {}
  
  movies: Imovie[] = []
  filteredMovies: Imovie[] = [];
  tags: string[] = [];
  selectedTag: string = '';
  selectedMovie!: Imovie;
  ngOnInit(): void {
     this.fetchMovies();
  }

  fetchMovies() {
    this.movieService.fetchMovies().subscribe( {
      next: (response) => {
        this.movies = response;
        this.filteredMovies = response;
        this.tags = this.extractUniqueTags(response);
      }
    })
  }

  extractUniqueTags(movies: Imovie[]): string[] {
    const tagSet = new Set<string>();
    movies.forEach(movie => {
      if (movie.tags) {
        movie.tags.split(',').forEach(tag => tagSet.add(tag.trim()));
      }
    });
    return Array.from(tagSet);
  }

  filterMovies() {
    if (this.selectedTag) {
      this.filteredMovies = this.movies.filter(movie => movie.tags.includes(this.selectedTag));
    } else {
      this.filteredMovies = this.movies;
    }
  }

  deleteMovie(movieId: number) {
    this.movieService.deleteMovie(movieId)
    .subscribe(() => {
      this.fetchMovies();
    })
  }

  openModal(movie: Imovie) {
    this.selectedMovie = movie;
    const modal = new bootstrap.Modal(document.getElementById('movieModal') as HTMLElement);
    modal.show();
  }

}
