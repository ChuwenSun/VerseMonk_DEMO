import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Song } from './song.model';


@Injectable({
  providedIn: 'root',
})
export class SongService {
  private apiUrl = environment.apiUrl;
  private baseUrl = `${this.apiUrl}/songs`;

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<any[]>(`${this.baseUrl}`).pipe(
      map(data => data.map(item => this.transformSong(item)))
    );
  }

  getSongById(id: string): Observable<Song> {
    return this.http.get<any>(`${this.apiUrl}/songs/${id}`).pipe(
      map(data => this.transformSong(data))
    );
  }

  getHotSongs(): Observable<Song[]> {
    return this.http.get<any[]>(`${this.apiUrl}/songs/hot`).pipe(
      map(data => data.map(item => this.transformSong(item)))
    );
  }

  getFilteredSongs(genre: string, year: string, language: string): Observable<Song[]> {
    let params = new HttpParams();
    if (genre !== 'All Genres') {
      params = params.set('genre', genre);
    }
    if (year !== 'All Years') {
      params = params.set('year', year);
    }
    if (language !== 'All Languages') {
      params = params.set('language', language);
    }

    return this.http.get<any[]>(`${this.apiUrl}/songs/filter`, { params }).pipe(
      map(data => data.map(item => this.transformSong(item)))
    );
  }

  private transformSong(data: any): Song {
    return {
      id: data.id,
      title: data.title,
      artist: data.artist,
      year: data.year,
      album: data.album,
      views: data.views,
      genre: data.tag,  // Transform 'tag' to 'genre'
      features: data.features,
      lyrics: data.lyrics,
      image: data.image,
      language: data.language
    };
  }
}
