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

  apiURL = 'https://apropiacion.herokuapp.com';
  lstImage: Multimedia[];
  lstAudio: Multimedia[];
  lstVideo: Multimedia[];
  lstImageBase: Multimedia[];
  lstAudioBase: Multimedia[];
  lstVideoBase: Multimedia[];
  showImage = true;
  showAudio = true;
  showVideo = true;

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
    if(value === 'Todo') {
      this.showImage = true;
      this.showAudio = true;
      this.showVideo = true;
    }
    else if (value === 'Imagen')
    {
      this.showImage = true;
      this.showAudio = false;
      this.showVideo = false;
    }
    else if(value === 'Video')
    {
      this.showImage = false;
      this.showAudio = false;
      this.showVideo = true;
    }
    else if(value === 'Audio')
    {
      this.showImage = false;
      this.showAudio = true;
      this.showVideo = false;
    }
  }

  onChangeCategoria(value) {
    console.log(this.lstImageBase);
    console.log(this.lstAudioBase);
    console.log(this.lstVideoBase);
    if(value === 'todo') {
      this.lstImage = this.lstImageBase;
      this.lstAudio = this.lstAudioBase;
      this.lstVideo = this.lstVideoBase;
    }
    else {
      this.lstImage = this.lstImageBase.filter(image => image.categoria === value);
      this.lstAudio = this.lstAudioBase.filter(audio => audio.categoria === value);
      this.lstVideo = this.lstVideoBase.filter(video => video.categoria === value);
    }
  }

  getAll() {
    this.getImage();
    this.getAudio();
    this.getVideo();
  }

  getImage() {
    this.galleryService.getImage().subscribe(lstImage => {this.lstImage = lstImage; this.lstImageBase = lstImage;});
  }

  getAudio() {
    this.galleryService.getAudio().subscribe(lstAudio => {this.lstAudio = lstAudio; this.lstAudioBase = lstAudio;});
  }

  getVideo() {
    this.galleryService.getVideo().subscribe(lstVideo => {this.lstVideo = lstVideo; this.lstVideoBase = lstVideo;});
  }
}
