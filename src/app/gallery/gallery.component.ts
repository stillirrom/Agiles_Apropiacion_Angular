import {Component, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
import {Categoria, Multimedia, TipoRecurso} from './multimedia';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  apiURL = 'http://localhost:8000';
  lstImage: Multimedia[];
  lstAudio: Multimedia[];
  lstVideo: Multimedia[];

  lstTiposRecurso: TipoRecurso[];
  lstCategorias: Categoria[];

  configComboboxes;

  constructor(public galleryService: GalleryService) {
  }

  ngOnInit() {
    this.obtenerListaCategorias();
    this.obtenerListaTipos();
    this.getAll();
  }

  obtenerListaTipos() {
    this.galleryService.getTiposMultimedia().subscribe(response => this.lstTiposRecurso = response);
  }

  obtenerListaCategorias() {
    this.galleryService.getCategorias().subscribe(response => this.lstCategorias = response);
  }

  onChangeTipo(value) {
    if(value === 'Todo')
      this.getAll();
    else if (value === 'Imagen')
    {
      this.getImage();
      this.lstVideo = [];
      this.lstAudio = [];
    }
    else if(value === 'Video')
    {
      this.getVideo();
      this.lstImage = [];
      this.lstAudio = [];
    }
    else if(value === 'Audio')
    {
      this.getAudio();
      this.lstImage = [];
      this.lstVideo = [];
    }
  }

  getAll() {
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
