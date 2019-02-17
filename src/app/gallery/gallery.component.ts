import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  url = 'https://uniandes.edu.co/sites/default/files/enterate-bm.jpg';
  products: any = [];
  constructor() { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
      this.products = [];
      /*this.rest.getProducts().subscribe((data: {}) => {
        console.log(data);
        this.products = data;
      });*/
    }
}
