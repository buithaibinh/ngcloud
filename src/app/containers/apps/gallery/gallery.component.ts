import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YoutubeService } from '../../../shared/services/youtube.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  videos: any[];
  constructor(
    private videoService: YoutubeService
  ) { }

  ngOnInit() {
    this.videoService.getAll().subscribe((res: any) => {
      this.videos = res;
    });
  }

}
