import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

interface MediaStatus {
  queued: boolean;
  isPlaying: boolean;
}

@Component({
  selector: 'youtube-media',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./youtube-media.scss'],
  templateUrl: './youtube-media.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeMediaComponent {
  @Input() media: any;
  @Input() status: MediaStatus = {
    queued: false,
    isPlaying: false
  };
  @Output() play = new EventEmitter<any>();
  @Output() queue = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
  @Output() unqueue = new EventEmitter<any>();

  showDesc = false;
  isPlaying = false;

  constructor() { }

  playVideo(media: any) {
    this.play.emit(media);
  }

  queueVideo(media: any) {
    this.queue.emit(media);
  }

  addVideo(media: any) {
    this.add.emit(media);
  }

  toggle(showDesc: Boolean) {
    this.showDesc = !showDesc;
  }

  removeVideoFromQueue(media: any) {
    this.unqueue.emit(media);
  }
}
