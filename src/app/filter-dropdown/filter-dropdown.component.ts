import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent {
  isOpen = false;
  selectedGenre: string = 'All Genres';
  selectedYear: string = 'All Years';
  selectedLanguage: string = 'All Languages';
  genres: string[] = ['All Genres', 'Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical'];
  years: string[] = ['All Years', '2024', '2023', '2022', '2021', '2020'];
  languages: string[] = ['All Languages', 'English', 'Spanish', 'French', 'German', 'Chinese'];

  applyFilter() {
    console.log('Filter applied with:', {
      genre: this.selectedGenre,
      year: this.selectedYear,
      language: this.selectedLanguage,
    });
  }

  getFilterText(): string {
    return `${this.selectedGenre}/${this.selectedYear}/${this.selectedLanguage}`;
  }
}
