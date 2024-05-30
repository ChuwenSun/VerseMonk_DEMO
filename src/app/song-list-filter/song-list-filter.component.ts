import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-song-list-filter',
  templateUrl: './song-list-filter.component.html',
  styleUrls: ['./song-list-filter.component.css'],

})
export class SongListFilterComponent {
  genres: string[] = ['All Genres', 'rap', 'pop', 'rock', 'jazz']; // Add more genres as needed
  years: string[] = ['All Years', '1980s', '1990s', '2000 ->']; // Add more years as needed
  languages: string[] = ['All Languages', 'en', 'es', 'fr']; // Add more languages as needed

  selectedGenre: string = 'All Genres';
  selectedYear: string = 'All Years';
  selectedLanguage: string = 'All Languages';

  isOpen: boolean = false; // Declare and initialize isOpen property

  @Output() filterChange = new EventEmitter<{ genre: string, year: string, language: string }>();

  applyFilter() {
    this.filterChange.emit({
      genre: this.selectedGenre,
      year: this.selectedYear,
      language: this.selectedLanguage
    });
    this.isOpen = false; // Close the dropdown after applying the filter
  }

  getFilterText(): string{
    return `${this.selectedGenre}/${this.selectedYear}/${this.selectedLanguage}`;
  }
}
