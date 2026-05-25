import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  finalizado: boolean;
  prioridad: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

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

  ngOnInit() {
  }

}