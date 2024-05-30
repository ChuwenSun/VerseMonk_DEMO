import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SongService} from '../services/song.service';
import { SongListFilterComponent } from '../song-list-filter/song-list-filter.component';
import { Song } from '../services/song.model';
// interface Song {
//   image: string;
//   title: string;
//   artist: string;
//   genre: string;
//   year: number;
//   language: string;
//   popularity: number;
//   views: string;
//   id: Int16Array;
// }

@Component({
  selector: 'app-song-list-with-filter',
  templateUrl: './song-list-with-filter.component.html',
  styleUrls: ['./song-list-with-filter.component.css'],
})
export class SongListWithFilterComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  songs: Song[] = [];
  displayedSongs: Song[] = [];
  songsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.fetchSongs();
  }

  fetchSongs() {
    this.songService.getSongs().subscribe(
      (data: Song[]) => {
        this.songs = data;
        this.updateDisplayedSongs();
      },
      error => {
        console.error('Error fetching songs:', error);
      }
    );
  }

  updateDisplayedSongs(): void {

    const endIndex = this.currentPage * this.songsPerPage;
    this.displayedSongs = this.songs.slice(0, endIndex);
  }

  loadMore(): void {
    this.currentPage++;
    this.updateDisplayedSongs();
  }

  onFilterChange(filter: { genre: string, year: string, language: string }) {


    this.songService.getFilteredSongs(filter.genre, filter.year, filter.language).subscribe(
      data => {
        this.songs = data;
        this.updateDisplayedSongs();
      },
      error => {
        console.error('Error fetching filtered songs:', error);
      }
    );
  }
}
