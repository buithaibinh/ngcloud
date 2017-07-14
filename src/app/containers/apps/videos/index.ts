import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/index';

import { YoutubeListComponent } from './youtube-list/youtube-list';
import { YoutubeMediaComponent } from './youtube-media/youtube-media';
import { VideosComponent } from './videos.component';

import { YoutubeService } from './model/youtube.service';

const COMPONENTS = [
    YoutubeListComponent,
    YoutubeMediaComponent,
    VideosComponent
]

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [VideosComponent],
    declarations: COMPONENTS,
    providers: [YoutubeService],
})
export class VideosModule { }
