import { Injectable } from '@angular/core';
import {Multimedia} from './multimedia';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class GalleryService {
  API_URL = 'http://127.0.0.1:8000/';
  private vLstEntity: Array<Multimedia> = [];
  constructor(private  httpClient: HttpClient) { }
    getImages(): Observable<Multimedia[]> {
        this.vLstEntity = [];
        /*this.httpClient.get('https://api.github.com/users/seeschweiler').subscribe(data => {
          console.log(data);
        });*/
        this.httpClient.get('http://localhost:8002/galeria/').subscribe((data: Array<any>) => {
          data.forEach( dataItem => {
              const vEntity = new Multimedia();
              vEntity.titulo = dataItem.fields.titulo;
              vEntity.autor = dataItem.fields.autor;
              // vEntity.url = dataItem.fields.url;
              // vEntity.description = dataItem.fields.description;
              // vEntity.imageFile = dataItem.fields.imageFile;
              // vEntity.type = dataItem.fields.type;
              this.vLstEntity.push(vEntity);
          });
        });
        return of(this.vLstEntity);
     }
}
