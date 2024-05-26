import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-song-list-filter',
  templateUrl: './song-list-filter.component.html',
  styleUrls: ['./song-list-filter.component.css'],
  // animations: [
  //   trigger('dropdownAnimation', [
  //     state('open', style({
  //       opacity: 1,
  //       transform: 'translateY(0)'
  //     })),
  //     state('closed', style({
  //       opacity: 0,
  //       transform: 'translateY(-10px)'
  //     })),
  //     transition('closed =&gt; open', [
  //       animate('300ms ease-out')
  //     ]),
  //     transition('open =&gt; closed', [
  //       animate('200ms ease-in')
  //     ])
  //   ])
  // ]

})
export class SongListFilterComponent {
  genres: string[] = ['All Genres', 'Hip-Hop', 'Pop', 'Rock', 'Jazz']; // Add more genres as needed
  years: string[] = ['All Years', '2023', '2022', '2021', '2020']; // Add more years as needed
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
