import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
