import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {GalleryService} from './gallery.service';
import {Multimedia} from '../multimedia';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  url = 'https://uniandes.edu.co/sites/default/files/enterate-bm.jpg';
  images: Observable<Multimedia[]>;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getImages();
  }
  getImages() {
      this.images = this.galleryService.getImages();
    }
}
