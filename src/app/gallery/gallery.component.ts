import {Component, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
import {Multimedia} from './multimedia';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  apiURL = 'https://apropiacion.herokuapp.com';
  lstImage: Multimedia[];
  lstAudio: Multimedia[];
  lstVideo: Multimedia[];

  constructor(public galleryService: GalleryService) {
  }

  ngOnInit() {
    this.getImage();
    this.getAudio();
    this.getVideo();
  }

  getImage() {
    this.galleryService.getImage().subscribe(lstImage => this.lstImage = lstImage);
  }

  getAudio() {
    this.galleryService.getAudio().subscribe(lstAudio => this.lstAudio = lstAudio);
  }

  getVideo() {
    this.galleryService.getVideo().subscribe(lstVideo => this.lstVideo = lstVideo);
  }
}
