import {DatePipe} from '@angular/common';

export class Multimedia {
  id: string;
  titulo: string;
  autor: string;
  fechacreacion: DatePipe;
  ciudad: string;
  pais: string;
  categoria: string;
  usuario: string;
  contenido: string;
}

export class Categoria {
  id: string;
  description: string;
  categoriaid: string;
}

export class TipoRecurso {
  id: string;
  description: string;
}
