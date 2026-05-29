import { Task } from './../models/task.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    FormsModule
  ],
})
export class HomePage {

  newTaskStr: string = '';

  tasks: Task[] = [
    {
      id: 1,
      titulo: "Configuración de Ionic",
      descripcion: "Instalar Node.js, Angular CLI, Ionic",
      finalizado: true,
      prioridad: "Alta"
    },
    {
      id: 2,
      titulo: "Crear app tasklist",
      descripcion: "Crear el proyecto inicial de Ionic con Angular",
      finalizado: false,
      prioridad: "Media"
    }
  ];

  constructor() {
    console.log(this.tasks);
  }

addTask() {

  // Quitar espacios
  const tituloLimpio = this.newTaskStr.trim();

  // Validar vacío
  if (tituloLimpio.length === 0) {
    alert('El título no puede estar vacío');
    return;
  }

  // Convertir formato:
  // UpperCase
  const tituloFormateado =
    tituloLimpio.charAt(0).toUpperCase() +
    tituloLimpio.slice(1).toLowerCase();

  // Validar duplicados
  const existe = this.tasks.some(
    tarea => tarea.titulo === tituloFormateado
  );

  if (existe) {
    alert('La tarea ya existe');
    return;
  }

  // Crear nueva tarea
  const newTask: Task = {
    id: Date.now(),
    titulo: tituloFormateado,
    descripcion: '',
    finalizado: false,
    prioridad: 'Media'
  };

  this.tasks.push(newTask);

  // Limpiar input
  this.newTaskStr = '';
}

}