// song.model.ts
export interface Song{
    image: string;
    title: string;
    album: string;
    artist: string;
    genre: string;
    year: number;
    language: string;
    views: number;
    id: string;
    features: string;
    lyrics: string;
  }
  
  export class SongClass implements Song {
    image: string;
    title: string;
    album: string;
    artist: string;
    genre: string;
    year: number;
    language: string;
    views: number;
    id: string;
    features: string;
    lyrics: string;
  
    constructor(
        image: string = '',
      title: string = '',
      artist: string = '',
      album: string = '',
      year: number = 0,
      language: string = '',
      views: number = 0,
      id: string = '',
      genre: string = '',
      features: string = '',
      lyrics: string = ''
    ) {
      this.title = title;
      this.id = id;
      this.language = language;
      this.image = image;
      this.artist = artist;
      this.album = album;
      this.year = year;
      this.views = views;
      this.genre = genre;
      this.features = features;
      this.lyrics = lyrics;
    }
  }
  