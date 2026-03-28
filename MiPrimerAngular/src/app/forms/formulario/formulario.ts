import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
     nombre: ['', Validators.required],
     correo: ['', [Validators.required, Validators.email]],
     tipo_de_documento: ['', Validators.required],
     numero_de_documento: ['', Validators.required],
     fecha_de_nacimiento: ['', Validators.required],
     estado_civil: ['', Validators.required],
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }



}