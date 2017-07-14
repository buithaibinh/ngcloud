import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { GoogleApiYouTubeVideoResource } from './model/video.model';
import { YoutubeService } from './model/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos$: Observable<any>;
  playlist$: Observable<any>;
  constructor(
    private videoService: YoutubeService
  ) { }

  ngOnInit() {
    this.videos$ = this.videoService.getAll();
  }

  playSelectedVideo(media: GoogleApiYouTubeVideoResource) {

  }

  queueSelectedVideo(media: GoogleApiYouTubeVideoResource) {
  }

  removeVideoFromPlaylist(media: GoogleApiYouTubeVideoResource) {
  }
}
