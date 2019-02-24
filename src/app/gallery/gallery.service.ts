import {Injectable} from '@angular/core';
import {Multimedia} from './multimedia';
import {Categoria} from './multimedia';
import {TipoRecurso} from './multimedia';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  apiURL = 'https://apropiacion.herokuapp.com';
  private vLstImagen: Array<Multimedia> = [];
  private vLstAudio: Array<Multimedia> = [];
  private vLstVideo: Array<Multimedia> = [];
  private vLstTipoMultimedia: Array<TipoRecurso> = [];
  private vLstCategoria: Array<Categoria> = [];
  showImage = true;
  showAudio = true;
  showVideo = true;

  constructor(private  httpClient: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    this.vLstCategoria = [];
    this.httpClient.get(this.apiURL + '/galeria/obtenerCategorias').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let vEntity = new Categoria();
        vEntity.id = dataItem.id;
        vEntity.description = dataItem.description;
        vEntity.categoriaid = dataItem.categoriaid;
        this.vLstCategoria.push(vEntity);
      });
    });
    return of(this.vLstCategoria);
  }

  getTiposMultimedia(): Observable<TipoRecurso[]> {
    this.vLstTipoMultimedia = [];
    this.httpClient.get(this.apiURL + '/galeria/obtenerTipoMultimedia').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let vEntity = new TipoRecurso();
        vEntity.id = dataItem.id;
        vEntity.description = dataItem.description;
        this.vLstTipoMultimedia.push(vEntity);
      });
    });
    return of(this.vLstTipoMultimedia);
  }

  getImage(): Observable<Multimedia[]> {
    this.vLstImagen = [];
    this.httpClient.get(this.apiURL + '/galeria/obtenerImagen/').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const vEntity = new Multimedia();
        vEntity.id = dataItem.pk;
        vEntity.titulo = dataItem.fields.titulo;
        vEntity.autor = dataItem.fields.autor;
        vEntity.fechacreacion = dataItem.fields.fecha_creacion;
        vEntity.ciudad = dataItem.fields.ciudad;
        vEntity.pais = dataItem.fields.pais;
        vEntity.categoria = dataItem.fields.categoria;
        vEntity.usuario = dataItem.fields.usuario;
        vEntity.contenido = dataItem.fields.contenido;
        this.vLstImagen.push(vEntity);
      });
    });
    return of(this.vLstImagen);
  }

  getAudio(): Observable<Multimedia[]> {
    this.vLstAudio = [];
    this.httpClient.get(this.apiURL + '/galeria/obtenerAudio/').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const vEntity = new Multimedia();
        vEntity.id = dataItem.pk;
        vEntity.titulo = dataItem.fields.titulo;
        vEntity.autor = dataItem.fields.autor;
        vEntity.fechacreacion = dataItem.fields.fecha_creacion;
        vEntity.ciudad = dataItem.fields.ciudad;
        vEntity.pais = dataItem.fields.pais;
        vEntity.categoria = dataItem.fields.categoria;
        vEntity.usuario = dataItem.fields.usuario;
        vEntity.contenido = dataItem.fields.contenido;
        this.vLstAudio.push(vEntity);
      });
    });
    return of(this.vLstAudio);
  }

  getVideo(): Observable<Multimedia[]> {
    this.vLstVideo = [];
    this.httpClient.get(this.apiURL + '/galeria/obtenerVideo/').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const vEntity = new Multimedia();
        vEntity.id = dataItem.pk;
        vEntity.titulo = dataItem.fields.titulo;
        vEntity.autor = dataItem.fields.autor;
        vEntity.fechacreacion = dataItem.fields.fecha_creacion;
        vEntity.ciudad = dataItem.fields.ciudad;
        vEntity.pais = dataItem.fields.pais;
        vEntity.categoria = dataItem.fields.categoria;
        vEntity.usuario = dataItem.fields.usuario;
        vEntity.contenido = dataItem.fields.contenido;
        this.vLstVideo.push(vEntity);
      });
    });
    return of(this.vLstVideo);
  }
}
