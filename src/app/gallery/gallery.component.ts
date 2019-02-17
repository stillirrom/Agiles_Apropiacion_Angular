import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../gallery.service';
import {Multimedia} from '../multimedia';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  url = 'https://uniandes.edu.co/sites/default/files/enterate-bm.jpg';
  images: Multimedia[];
  constructor(public galleryService: GalleryService) { }

  ngOnInit() {
    this.getImages();
  }
  getImages() {
      this.galleryService.getImages().subscribe(images => this.images = images);
  }
}
