import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

// El component sirve para indicar que categoria esta un componente de Angular, y se le pasan varias propiedades como el selector, los imports, la plantilla y el estilo.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Bienvenidos = "Hola Miguel";

  Estudiantes = ['Cuadernos','Gorras','Gafas']
}
