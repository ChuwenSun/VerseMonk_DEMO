import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-hot-songs',
  templateUrl: './hot-songs-list.component.html',
  styleUrls: ['./hot-songs-list.component.css']
})
export class HotSongsListComponent implements OnInit {
  hotSongs: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getHotSongs().subscribe(data => {
      this.hotSongs = data;
    });
  }
}
