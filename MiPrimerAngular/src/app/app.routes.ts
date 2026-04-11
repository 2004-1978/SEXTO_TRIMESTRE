import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Ejercicios } from './pages/ejercicios/ejercicios';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: 'Inicio', component: Inicio },
  { path: 'Ejercicios', component: Ejercicios },
  { path: 'Contacto', component: Contacto }
];